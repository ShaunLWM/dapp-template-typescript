import { createConfig, http } from "wagmi"
import { hardhat, mainnet, sepolia } from "wagmi/chains"

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}

export const config = createConfig({
  chains: [mainnet, sepolia, hardhat],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http()
  },
})
