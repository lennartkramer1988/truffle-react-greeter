const Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
const Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
const Greeter = artifacts.require("./Greeter.sol");

module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.link(Ownable, Killable);
    deployer.deploy(Killable);
    deployer.link(Killable, Greeter);
    deployer.deploy(Greeter, "Basic greeting");
};
