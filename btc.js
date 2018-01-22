var CoinKey = require('coinkey'); //1.0.0

var ck = new CoinKey.createRandom();

console.log("Private Key (Wallet Import Format): " + ck.privateWif);
console.log("Private Key (Hex): " + ck.privateKey.toString('hex'));
console.log("Address: " + ck.publicAddress);