var bitcoin = require('bitcoinjs-lib');

var litecoin = bitcoin.networks.litecoin;
var keyPair = bitcoin.ECPair.makeRandom({ network: litecoin});
var wif = keyPair.toWIF();
var address = keyPair.getAddress();
console.log("keyPair: "+keyPair);
console.log("wif: "+wif);
console.log("address: "+address);