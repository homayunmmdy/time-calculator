import reducer from './reducer'

function store(reducer) {
  let state;

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state , action)
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch
  };
}

export default store(reducer);
