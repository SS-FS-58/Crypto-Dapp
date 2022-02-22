require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['76d1c1d36812918a2518c26a7ec5d0903cbbf692511e73e8137b4424b5ad4684'],
    },
  },
};