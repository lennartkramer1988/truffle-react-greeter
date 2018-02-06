import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Routes from './Routes/Routes';
import {store} from './core/redux/store';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.css';
import './styles/cover.css';
import {buildGreeter} from "./utils/contract";
import Web3 from "web3";

import {setWeb3} from "./core/redux/web3-reducer";
import {setGreeterContract, updateGreeting} from "./app/Greeter/redux/greeter-reducer";
import greeterService from "./app/Greeter/GreeterService";

const rootElement = document.getElementById('root');

function initiaize() {
    // initialize web3 and set in store.
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    store.dispatch(setWeb3(web3));

    // set contract and current greeting in store.
    const greeter = buildGreeter(web3.currentProvider);
    store.dispatch(setGreeterContract(greeter));
    greeterService.getGreeting(greeter).then(currentGreeting => {
        store.dispatch(updateGreeting(currentGreeting));
    });

    // watch for event of greeting changes and update store.
    return greeter.deployed().then(function (instance) {
        const event = instance.GreetingChange({fromBlock: 0, toBlock: 'latest'});
        event.watch(function (error, result) {
            if (error) {
                console.log(error)
            } else if (result.args) {
                store.dispatch(updateGreeting(result.args.newGreeting))
            }
        });
    });
}

if (rootElement) {
    initiaize();
    render(
        <Provider store={store}>
            <Routes/>
        </Provider>,
        rootElement // $FlowFixMe
    );
}
registerServiceWorker();
