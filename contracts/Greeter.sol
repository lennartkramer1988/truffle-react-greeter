pragma solidity ^0.4.4;

import "./lifecycle/Killable.sol";

contract Greeter is Killable {
    string greeting;

    event GreetingChange(string newGreeting);

    function Greeter(string _greeting) public {
        greeting = _greeting;
    }

    function greet() public constant returns (string) {
        return greeting;
    }

    function changeGreeting(string _newGreeting) public onlyOwner {
        greeting = _newGreeting;
        GreetingChange(_newGreeting);
    }
}