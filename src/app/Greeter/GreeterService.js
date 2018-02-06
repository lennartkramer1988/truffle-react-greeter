class GreeterService {
    getGreeting(greeter) {
        return greeter.deployed().then(function (instance) {
            return instance.greet({from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"});
        })
    }

    changeGreeting(greeter, newGreeting: string) {
        return greeter.deployed().then(function (instance) {
            instance.changeGreeting(newGreeting, {from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"});
        })
    }
}

export default new GreeterService();
