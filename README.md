## Getting started

1. Install the dependencies

```sh
yarn
```

2. Start the local test node

```sh
npx hardhat node
```

Connect metamask to localhost and use one of the private keys generated from the above

if changes were made to the smart contract rerun:

```sh
npx hardhat compile
```

3. Deploy the contract

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Update __src/App.js__ with the values of your contract addresses (`greeterAddress` and `tokenAddress`)

5. Run the app

```sh
npm start
```

## Troubleshooting

### Nonce too high

Uninstall and reinstall metamask, create account, then re-import the private key from hardhat's local node

## Frontend development

For contract interactions, make sure to pull in the types from typechain. Right now this repo uses .js files but going forward .ts is preferred to ensure frontend integrates with contract
