import {HardhatUserConfig} from 'hardhat/config';
import {BigNumber} from 'ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@nomiclabs/hardhat-etherscan';
import dotenv from 'dotenv';
import fs from 'fs';
if (fs.existsSync('./sdk/src/typechain')) {
  import('./tasks');
}

dotenv.config();
const privateKey = process.env.PRIVATE_KEY;
const gasPrice = process.env.GAS_PRICE || 1;
const mnemonic = 'test test test test test test test test test test test junk';
let accounts;
if (privateKey) {
  accounts = [privateKey];
} else {
  accounts = {
    mnemonic,
  };
}

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
        accountsBalance: '100000000000000000000000000',
      },
      blockGasLimit: 60000000,
      initialBaseFeePerGas: 0,
    },
    20220813: {
      url: `https://mzc-testnet.seaeye.cn`,
      accounts,
      timeout: 10000,
      gasPrice: BigNumber.from(gasPrice)
        .mul(10 ** 9)
        .toNumber(),
    }
  },
  namedAccounts: {
    deployer: 0,
    accountA: 1,
    accountB: 2,
    accountC: 3,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    currency: 'CHF',
    gasPrice: 1,
  },
  typechain: {
    outDir: './sdk/src/typechain',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: process.env.APIKEY,
  }
};
export default config;
