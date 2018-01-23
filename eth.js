var Accounts = require('web3-eth-accounts');

var accounts = new Accounts();

var cred = accounts.create();
console.log(cred);