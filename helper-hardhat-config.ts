export interface networkConfigItem {
  ethUsdPriceFeed?: string
  blockConfirmations?: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
  // Default one is ETH/USD contract on Sepolia
  polygonMumbai: {
    ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    blockConfirmations: 6,
  },
}

export const developmentChains = ["hardhat", "localhost"]
