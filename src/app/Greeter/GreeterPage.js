// @flow

import React, {Component} from 'react';

import Greeter from './Greeter';
import greeterService from './GreeterService';
import {connect} from "react-redux";

class GreeterPage extends Component {
    render() {
        return <Greeter onSubmit={(newGreeting) => this.updateGreeting(newGreeting)} />;
    }

    updateGreeting(newGreeting) {
        greeterService.changeGreeting(this.props.greeter, newGreeting);
    }
}
function mapStateToProps(store) {
    return {
        greeter: store.greeter.greeter
    };
}

export default connect(mapStateToProps)(GreeterPage);