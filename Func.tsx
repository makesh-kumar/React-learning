import { DependencyList, EffectCallback } from 'react';
import React = require('react');
import Test from './Test';
import { connect } from 'react-redux';
// export default ({ name }) => <h1>Hello {name}!</h1>;

const cc = (val) => {
  console.log(val);
};

let func = (props) => {
  return (
    <div>
      <button onClick={() => props.inc()}>Inc here</button>
      <h1>FUNC {props.count}</h1>
      <Test cl={cc} />
    </div>
  );
};

const val = (state) => {
  console.log(state);

  return { count: state.count };
};

const dispatcher = (dispatch) => {
  return {
    inc: () => {
      dispatch({ type: 'inc' });
    },
  };
};
export default connect(val, dispatcher)(func);
