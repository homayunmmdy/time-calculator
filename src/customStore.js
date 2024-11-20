function store() {
  let state;

  function getState() {
    return state;
  }

  return {
    getState,
  };
}

export default store;
