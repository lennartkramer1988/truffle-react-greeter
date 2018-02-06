import React, {Component} from 'react';
import { connect } from 'react-redux';

type Props = {
    greeting:string,
    onSubmit: (newGreeting: string) => void
};
type State = {
    newGreeting:string
};

class Greeter extends Component<void, Props, State> {
    state = {
        newGreeting: ''
    };

    render() {
        return (
            <div className="cover-container mt-5">
                <main role="main" className="inner cover">
                    <p className="lead">{this.props.greeting}</p>
                </main>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label>Change greeting on contract</label>
                        <input className="form-control" name="newGreeting" type="text" onChange={(event) => this.updateNewGreeting(event.target.value)}/>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-primary" type="submit" disabled={this.state.newGreeting === ''}>Change greeting</button>
                    </div>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.newGreeting);
    }

    updateNewGreeting(newGreeting) {
        this.setState({newGreeting});
    }
}

function mapStateToProps(store) {
    return {
        greeting: store.greeter.greeting
    };
}

export default connect(mapStateToProps)(Greeter);