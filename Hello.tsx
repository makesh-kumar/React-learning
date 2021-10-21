import React, { Component } from 'react';

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

  callParent = ()=> {
    this.props.onClick(this.state.str);
  }

  render() {
    return (
      <div>
        <h1 className="mm">Hello component {this.props.name} </h1>
        <input onChange={this.onInpChange} />
        <button onClick={this.callParent}>Click Me</button>
      </div>
    );
  }
}
