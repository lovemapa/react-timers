import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, deleted, add, store, subtract } from '../../store/actions/index'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':

                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add " clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onResultStore(this.props.ctr)}>Store</button>
                <ul>
                    {this.props.storedResults.map(result => (

                        <li key={result.id} onClick={() => this.props.onDeleteStore(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    };
}


const mapDispatchToProps = dispatch => {

    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add(10)),
        onSubtractCounter: () => dispatch(subtract(15)),
        onResultStore: (result) => dispatch(store(result)),
        onDeleteStore: (id) => dispatch(deleted(id))




    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);