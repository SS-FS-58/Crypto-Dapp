require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/omAgRjkhmb6kO3Ew2K3sVsZRXtVe1K-2',
      accounts: ['76d1c1d36812918a2518c26a7ec5d0903cbbf692511e73e8137b4424b5ad4684'],
    },
  },
};