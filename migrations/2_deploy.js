const PAYMENTS = artifacts.require("PAYMENTS");

module.exports = function(deployer) {
  deployer.deploy(PAYMENTS, ['0x1ba3A1086138A8A7ceA5ae860bac416D791BF2E1', '0x6B5f8Ce9Fd751EBB765921a84aCAfF3136C5628a', '0x88c39920641d848a61d05dcd7e7A5afe20cf1C0C'], [50, 30, 20]);
};