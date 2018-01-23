const bch = require('bitcoincashjs');

const privateKey = new bch.PrivateKey();
const address = privateKey.toAddress();

console.log(privateKey.toWIF());
console.log(address.toString());