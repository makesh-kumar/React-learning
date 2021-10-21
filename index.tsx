import React, { Component } from 'react';
import { render } from 'react-dom';
import { Hello } from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  str?: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

    onBtnClick = (D)=> {
    console.log('clicked..',D);
    this.setState({ str: 'sdsd' });
  }

  componentDidMount = () => {
    
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} onClick={this.onBtnClick} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
