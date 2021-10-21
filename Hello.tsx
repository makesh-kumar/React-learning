import React, { Component } from 'react';
import store from './Redux/state';
import { Provider } from 'react-redux';
import Func from './Func';
// export default ({ name }) => <h1>Hello {name}!</h1>;

export class Hello extends Component<any, any> {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  public str;
  onInpChange = (event) => {
    // console.log(event.target.value);
    this.setState({ str: event.target.value });
  };

  callParent = () => {
    this.props.onClick(this.state.str);
  };

  increment = () => {
    store.dispatch({ type: 'inc' });
    console.log(store.getState());
  };
  decrement = () => {
    store.dispatch({ type: 'dec' });
    console.log(store.getState());
  };
  push = () => {
    store.dispatch({ type: 'push', value: Math.random() });
    console.log(store.getState());
  };
  pop = () => {
    store.dispatch({ type: 'dec' });
    console.log(store.getState());
  };
  render() {
    return (
      <Provider store={store}>
        <Func />
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.push}>Push</button>
          <button onClick={this.pop}>Pop</button>
          <h1 className="mm">Hello component {this.props.name} </h1>
          <input onChange={this.onInpChange} />
          <button onClick={this.callParent}>Click Me</button>
        </div>
      </Provider>
    );
  }
}
