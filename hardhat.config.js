require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.15",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    dev: {
      url: "http://localhost:7545",
      gasPrice: 20,
      saveDeployments: true,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/UyWdWXAIso0ezkPqx6IycPnPi9hx0u1M",
      accounts: [process.env.PRIV_KEY],
      gasPrice: 20000000000,
      saveDeployments: true,
      blockGasLimit: 1000000,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      accounts: [process.env.PRIV_KEY],
      gasPrice: 20000000000,
      saveDeployments: true,
      blockGasLimit: 1000000,
    },
  },

  // This setup allowed to verify contract address directly from command line
  // Remember we installed etherscan plugin during our setups?
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
