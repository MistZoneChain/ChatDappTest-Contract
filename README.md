# uniswap-v2-contract

## Sample Scripts
### Install dependencies
```bash
yarn
```

### Compile contracts
```bash
yarn build
```

### Hardhat test
```bash
yarn test 
```

### Hardhat solidity-coverage
```bash
yarn test:cov
```

## SOP
### environment
#### localhost 
``` bash
yarn localhost

export ENV_FILE='./envs/.env.localhost'
export NETWORK='localhost'
export WAIT_NUM=1
export GAS_PRICE=1
```

#### bscTest
``` bash
export ENV_FILE='./envs/.env.bscTest'
export NETWORK_ID=97
export WAIT_NUM=1
export GAS_PRICE=10
```

#### bsc
``` bash
export ENV_FILE='./envs/.env.bsc'
export NETWORK_ID=56
export WAIT_NUM=1
export GAS_PRICE=5
```

#### rinkeby
``` bash
export ENV_FILE='./envs/.env.rinkeby'
export NETWORK_ID=4
export WAIT_NUM=1
export GAS_PRICE=3
```

#### eth
``` bash
export ENV_FILE='./envs/.env.eth'
export NETWORK_ID=1
export WAIT_NUM=3
export GAS_PRICE=30
```

### script

#### deploy script
```bash
yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable:deploy --gas-price $GAS_PRICE --wait-num $WAIT_NUM --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable5:deploy --gas-price $GAS_PRICE --wait-num $WAIT_NUM --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable3:deploy --gas-price $GAS_PRICE --wait-num $WAIT_NUM --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable4:deploy --gas-price $GAS_PRICE --wait-num $WAIT_NUM --network $NETWORK_ID
```

#### update script
```bash
yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable:update --gas-price $GAS_PRICE --wait-num $WAIT_NUM --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable2:update --gas-price $GAS_PRICE --wait-num $WAIT_NUM --network $NETWORK_ID
```

#### verify contract
```bash
yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable:verify --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable5:verify --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable3:verify --network $NETWORK_ID

yarn run env-cmd -f $ENV_FILE yarn run hardhat BlockChatUpgradeable4:verify --network $NETWORK_ID
```