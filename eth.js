var Web3EthAccounts = require('web3-eth-accounts');

var account = new Web3EthAccounts();
var cred = account.create();
console.log(cred);