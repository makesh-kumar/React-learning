import * as redux from 'redux';

const initialState = {
  count: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'inc': {
      return { ...state, count: state.count + 1 };
    }
    case 'dec': {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
}

function array(state = [], action) {
  switch (action.push) {
    case 'push': {
      const d = [...state];
      d.push(action.value);
      return [...d];
    }
    case 'pop': {
      const d = [...state];
      d.pop();
      return [...d];
    }
    default: {
      return state;
    }
  }
}

// function root(state = {}, action) {
//   return {
//     reducer: reducer(state.counter, action),
//     array: array(state.array, action),
//   };
// }
const store = redux.createStore(reducer);
// const store = redux.combineReducers({ reducer, array });
export default store;
