let Web3 = require('web3');
let net = require('net');
let web3 = new Web3(new Web3.providers.IpcProvider('\\\\.\\pipe\\geth.ipc', net));
if (true === web3.isConnected()) {
    console.log('Connected to IPC.');
}
// wraps web3 sync/callback function into a Promise
function web3AsynWrapper(web3Fun) {
    return function (arg) {
        return new Promise((resolve, reject) => {
            web3Fun(arg, (e, data) => e ? reject(e) : resolve(data))
        })
    }
}
let account = web3AsynWrapper(web3.personal.newAccount);
account("qwerty123").then(console.log);