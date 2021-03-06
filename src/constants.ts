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
    SOLO_FARM_ADDRESS: "0xaACe27C1Cc48BADC569d36e0502B25f39E18DA4C",
    WNEAR_ETH_LP_TOKEN_ADDRESS: "0x63da4DB6Ef4e7C62168aB03982399F9588fCd198",
  },
};
