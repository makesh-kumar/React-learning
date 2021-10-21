import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  return <h2>HOME</h2>;
};

const cc = () => {
  console.log('SSSS');
};

const Login = (props) => {
  console.log(props);
  const navigate = (p) => {
    props.history.push('/');
  };
  return (
    <div>
      <div>
        <p>Routing using functions</p>
        <button onClick={navigate}>Home</button>
        <button>Login</button>
        <button>Settings</button>
      </div>
      <h2 onClick={cc}>LOGIN</h2>
    </div>
  );
};
const LoginWithId = (props) => {
  console.log(props);
  return <h2>LOGIN WITH ID</h2>;
};

const Settings = (props) => {
  return <h2>Settings</h2>;
};

const PageNotFound = (props) => {
  return <h2>Page Not Found</h2>;
};
interface AppProps {
  history: any;
}
interface AppState {
  name: string;
  str?: string;
  resp: any;
}
export class Router extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    console.log('P', props);
  }

  routes = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Settings', path: '/settings' },
  ];
  render() {
    return (
      <BrowserRouter>
        <div>
          <hr />
          <p> Routing using Link</p>
          {this.routes.map((data, i) => (
            <Link to={data.path} key={i}>
              {data.name}{' '}
            </Link>
          ))}
          <hr />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/login/:ids" component={LoginWithId} />
          <Route path="/settings" component={Settings} />
          <Route component={PageNotFound} />
        </Switch>

        <div>
          <h3>Router</h3>
        </div>
      </BrowserRouter>
    );
  }
}
withRouter(Router);
