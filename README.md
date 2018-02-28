# Ethereum Token Tutorial

This is example repo for my articles about simple ERC20 compliant token:

* [Part 1](http://maksimivanov.com/posts/ethereum-react-dapp-tutorial)
* [Part 2](http://maksimivanov.com/posts/ethereum-react-dapp-tutorial-part-2)

## How to run

First install truffle and ganache globally:

```sh
npm install -g truffle
npm install -g ganache-cli
```

Now run `ganache-cli` on port `7545`:

```sh
ganache-cli -b 3 -p 7545
```

Run the migrations (contracts are already compiled):

```sh
truffle migrate
```

Install [🦊 Metamask](https://metamask.io/) browser extension and connect to local network (custom RPC, `http://localhost:7545`)

Go to `/front` folder install dependencies and run the app:

```sh
cd front
yarn
yarn start
```

Web app should be available on `http://localhost:3000`.

![Web app](http://d33wubrfki0l68.cloudfront.net/c4250fbace5f71f2af9312a7cea4d52c5d8dbf73/ae75a/assets/images/tutorial_token_wallet.png)

Login to Metamask using first private key from `ganache-cli` output. This account has all the Tutorial Tokens.

Try to send tokens to one of other accounts. You can get their addresses from `ganache-cli` as well.
