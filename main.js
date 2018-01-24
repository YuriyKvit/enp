let Web3 = require('web3');
let net = require('net');
// let personal = require('web3-eth-personal');

let web3 = new Web3(new Web3.providers.IpcProvider('\\\\.\\pipe\\geth.ipc', net));
if (true === web3.isConnected()) {
    console.log('Connected to IPC.');
}
let eth = {};
let tx = {
    from: '0x16C73B1D2422879E11D7BC33Da6cC5E34099374B',
    to: '0x16C73B1D2422879E11D7BC33Da6cC5E34099374B',
    value: '1000000000000000'
};
eth.balance = web3AsynWrapper(web3.eth.getBalance);
eth.send = web3AsynWrapper(web3.eth.sendTransaction);
eth.unlock = web3AsynWrapper(web3.personal.unlockAccount);
// eth.accounts = web3AsynWrapper(web3.eth.accounts);
// wraps web3 sync/callback function into a Promise
function web3AsynWrapper(web3Fun) {
    return function (arg) {
        return new Promise((resolve, reject) => {
            web3Fun(arg, (e, data) => e ? reject(e) : resolve(data))
        })
    }
}
// console.log(eth.accounts);
eth.unlock('1f25e98b60a3528704264d2754f410a1733e29d4', "qwerty123");
// eth.send(tx, '0xeabafee1572c828fe8249e8f107c2ab9bbcd40c8fd49de47cbf008298c5cec4f').then(console.log);


// // using the event emitter
// send({
//     from: '0x1fb99a783ef5b6502d74e997856b7fa48843ac29',
//     to: '0x1fb99a783ef5b6502d74e997856b7fa48843ac29',
//     value: '1000000000000000'
// }, function (error, hash) {
//     console.log('Error5: ' + error);
//     console.log('Hash: ' + hash);
// });
// var Accounts = require('web3-eth-accounts');

// var accounts = new Accounts(new Web3.providers.IpcProvider('\\\\.\\pipe\\geth.ipc', net));
// console.log('Start signing tx.');
// var tx = accounts.signTransaction({
//     to: '0x16C73B1D2422879E11D7BC33Da6cC5E34099374B',
//     value: '1000000000',
//     gas: 2000000
// }, '0xeabafee1572c828fe8249e8f107c2ab9bbcd40c8fd49de47cbf008298c5cec4f', function (err, res) {
//     if (!err) {
//         console.log('Receive signed tx');
//         var serializedTx = res.rawTransaction;
//         web3.eth.sendSignedTransaction(serializedTx)
//             .on('receipt', function (res) {
//                 console.log('Get result:');
//                 console.log(res);
//             });
//     } else {
//         console.log(err);
//     }
// });

