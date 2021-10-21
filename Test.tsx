import React = require('react');

// export default ({ name }) => <h1>Hello {name}!</h1>;

let val;
const onInpChange = (event) => {
  val = event.target.value;
  // console.log(event.target.value);
};

export default (props) => {
  return (
    <div>
      <input onChange={onInpChange} />
      <button
        onClick={() => {
          props.cl(val);
        }}
      >
        TEST{' '}
      </button>
    </div>
  );
};
