// https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain
export const BSC_TESTNET_CHAINID = 56;
export const BSC_MAINNET_CHAINID = 97;

// https://doc.aurora.dev/develop/networks
export const AURORA_MAINNET_CHAINID = 1313161554;
export const AURORA_TESTNET_CHAINID = 1313161555;
export const AURORA_MAINNET_URI = "https://mainnet.aurora.dev";
export const AURORA_TESTNET_URI = "https://testnet.aurora.dev";

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const networkID = 1313161554;

export const addresses: IAddresses = {
  1313161554: {
    SOLO_FARM_ADDRESS: "0x490859661d8F4956Ce7E9A0E2b28bd1163DCAc3e",
  },
};
