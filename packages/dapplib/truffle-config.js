require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember hole inflict knee suspect squirrel'; 
let testAccounts = [
"0x8979d6841d1eb586754e22c0b3b5c1b1ffc0f650468de4c288814ce8a3de591b",
"0xc4ef2b3230c0ff7f8bee0a50cc70b00b7c2da24d884c7efba23b9c3894d16b59",
"0x1417277928c3e658ae444a3f58fbde8a5710628c0febb4289695f74d4419eb11",
"0xe66f996e06269f793a46aa48cd9a773eb05c119f37db27357078ceb7bff4644e",
"0x09141a47922d3012b7487e924534481629ffe02a215c9a029a4679cba458e844",
"0xe8582ddd2a4356f9bd68b1006211d89e720b25e6a369f334f20b40ea41dc2525",
"0x687be99b364118c21628177141def8797305e06900fe08e00077e99e00a96c5f",
"0x54ab6750b442493dfdb10eb6844f5799b8dfc035ab955944c763bdc2ee6875ba",
"0xa2cebab51fd4418447fce67a9d8a21df49408baf84e03a9d27849ced583e466a",
"0x292f9f1d9c5abba942ea8bdf8b597da7df6557ed68d45f72a7b4d0a2bfda2d41"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

