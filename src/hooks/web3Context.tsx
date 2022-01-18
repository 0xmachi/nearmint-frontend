import React, { useState, ReactElement, useContext, useEffect, useMemo, useCallback } from "react";
import Web3Modal from "web3modal";
import { StaticJsonRpcProvider, JsonRpcProvider, Web3Provider, WebSocketProvider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { toast } from "react-toastify";


/**
 * kept as function to mimic `getMainnetURI()`
 * @returns string
 */

const USE_AURORA = true;

// https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain
const BSC_TESTNET_CHAINID = 56;
const BSC_MAINNET_CHAINID = 97;

// https://doc.aurora.dev/develop/networks
const AURORA_MAINNET_CHAINID = 1313161554;
const AURORA_TESTNET_CHAINID = 1313161555;
const AURORA_MAINNET_URI = 'https://mainnet.aurora.dev';
const AURORA_TESTNET_URI = 'https://testnet.aurora.dev';

function getTestnetURI() {
  if (USE_AURORA) {
    return AURORA_TESTNET_URI;
  }

  return 'https://data-seed-prebsc-1-s1.binance.org:8545/';
}


function getMainnetURI(): string {
  if (USE_AURORA) {
    return AURORA_MAINNET_URI
  }
  
  return 'https://bsc-dataseed.binance.org/';
}

/*
  Types
*/
type onChainProvider = {
  connect: () => void;
  disconnect: () => void;
  provider: JsonRpcProvider;
  address: string;
  connected: Boolean;
  web3Modal: Web3Modal;
};

export type Web3ContextData = {
  onChainProvider: onChainProvider;
} | null;

const Web3Context = React.createContext<Web3ContextData>(null);

export const useWeb3Context = () => {
  const web3Context = useContext(Web3Context);
  if (!web3Context) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " + "please declare it at a higher level.",
    );
  }
  const { onChainProvider } = web3Context;
  return useMemo(() => {
    return { ...onChainProvider };
  }, [web3Context]);
};

export const useAddress = () => {
  const { address } = useWeb3Context();
  return address;
};

export const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  // NOTE (appleseed): if you are testing on rinkeby you need to set chainId === 4 as the default for non-connected wallet testing...
  // ... you also need to set getTestnetURI() as the default uri state below
  const [chainID, setChainID] = useState(97); //56 or 97
  const [address, setAddress] = useState("");

  const [uri, setUri] = useState(getTestnetURI());

  const [provider, setProvider] = useState<JsonRpcProvider>(new StaticJsonRpcProvider(uri));

  const [web3Modal, setWeb3Modal] = useState<Web3Modal>(
    new Web3Modal({
      // network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              56: getMainnetURI(),
              97: getTestnetURI(),
            },
          },
        },
      },
    }),
  );

  const hasCachedProvider = (): Boolean => {
    if (!web3Modal) return false;
    if (!web3Modal.cachedProvider) return false;
    return true;
  };

  // NOTE (appleseed): none of these listeners are needed for Backend API Providers
  // ... so I changed these listeners so that they only apply to walletProviders, eliminating
  // ... polling to the backend providers for network changes
  const _initListeners = useCallback(
    rawProvider => {
      if (!rawProvider.on) {
        return;
      }
      rawProvider.on("accountsChanged", async (accounts: string[]) => {
        setTimeout(() => window.location.reload(), 1);
      });

      rawProvider.on("chainChanged", async (chain: number) => {
        _checkNetwork(chain);
        setTimeout(() => window.location.reload(), 1);
      });

      rawProvider.on("network", (_newNetwork: any, oldNetwork: any) => {
        if (!oldNetwork) return;
        window.location.reload();
      });
    },
    [provider],
  );

  /**
   * throws an error if networkID is not 56 (mainnet) or 97 (testnet)
   */
  const _checkNetwork = (otherChainID: number): Boolean => {
    console.error(
      "You are switching networks",
      0,
      otherChainID === AURORA_TESTNET_CHAINID || otherChainID === AURORA_MAINNET_CHAINID,
    );
    if (chainID !== otherChainID) {
      console.warn("You are switching networks", 0);
      if (otherChainID === AURORA_TESTNET_CHAINID || otherChainID === AURORA_MAINNET_CHAINID) {
        setChainID(otherChainID);
        otherChainID === AURORA_TESTNET_CHAINID ? setUri(getMainnetURI()) : setUri(getTestnetURI());
        return true;
      }
      return false;
    }
    return true;
  };

  // connect - only runs for WalletProviders
  const connect = useCallback(async () => {
    const rawProvider = await web3Modal.connect();

    // new _initListeners implementation matches Web3Modal Docs
    // ... see here: https://github.com/Web3Modal/web3modal/blob/2ff929d0e99df5edf6bb9e88cff338ba6d8a3991/example/src/App.tsx#L185
    _initListeners(rawProvider);

    const connectedProvider = new Web3Provider(rawProvider, "any");

    const chainId = await connectedProvider.getNetwork().then(network => network.chainId);
    const connectedAddress = await connectedProvider.getSigner().getAddress();
    const validNetwork = _checkNetwork(chainId);
    if (!validNetwork) {
      console.error("Wrong network, please switch to Aurora Mainnet chain");
      toast.error("Wrong network, please switch to Aurora Mainnet chain")
      return;
    }
    // Save everything after we've validated the right network.
    // Eventually we'll be fine without doing network validations.
    setAddress(connectedAddress);
    setProvider(connectedProvider);

    // Keep this at the bottom of the method, to ensure any repaints have the data we need
    setConnected(true);

    return connectedProvider;
  }, [provider, web3Modal, connected]);

  const disconnect = useCallback(async () => {
    console.log("disconnecting");
    web3Modal.clearCachedProvider();
    setConnected(false);

    setTimeout(() => {
      window.location.reload();
    }, 1);
  }, [provider, web3Modal, connected]);

  const onChainProvider = useMemo(
    () => ({ connect, disconnect, hasCachedProvider, provider, connected, address, chainID, web3Modal }),
    [connect, disconnect, hasCachedProvider, provider, connected, address, chainID, web3Modal],
  );

  // useEffect(() => {
  //   // logs non-functioning nodes && returns an array of working mainnet nodes, could be used to optimize connection
  //   NodeHelper.checkAllNodesStatus();
  // }, []);

  return <Web3Context.Provider value={{ onChainProvider }}>{children}</Web3Context.Provider>;
};
