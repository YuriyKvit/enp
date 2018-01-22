var bitcoin = require('bitcoingoldjs');

var keyPair = bitcoin.ECPair.makeRandom();
var wif = keyPair.toWIF();
var address = keyPair.getAddress();
console.log("keyPair: "+keyPair);
console.log("wif: "+wif);
console.log("address: "+address);