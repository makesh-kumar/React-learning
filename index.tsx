import React, { Component } from 'react';
import { render } from 'react-dom';
import { Hello } from './Hello';
import { Router } from './Router';
import Func from './Func';

import './style.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

interface AppProps {}
interface AppState {
  name: string;
  str?: string;
  resp: any;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      resp: [],
    };
  }

  onBtnClick = (D) => {
    console.log('clicked..', D);
    this.setState({ str: 'sdsd' });
  };

  componentDidMount = () => {};

  getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((d) => {
      this.setState({ resp: d.data });
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Hello name={this.state.name} onClick={this.onBtnClick} />

          <button onClick={this.getData}>Get Data</button>

          {/* {this.state.resp.map((d) => (
          <h1>d.title</h1>
        ))} */}

          {this.state.resp.title}
          <p>Start editing to see some magic happen :)</p>

          <Func />

          {/* <Router /> */}
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
