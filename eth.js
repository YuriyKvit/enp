var Web3EthAccounts = require('web3-eth-accounts');

var account = new Web3EthAccounts('ws://localhost:8546');
var cred = account.create();
console.log(cred);