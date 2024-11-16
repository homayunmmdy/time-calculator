import store from "./store";

const App = () => {
  store.dispatch({
    type : "bugAdded",
    payload: {
      description : "Bug1"
    }
  })

  store.dispatch({
    type: "bugRemoved",
    payload: {
      id : 1
    }
  })
  console.log(store.getState())
  return (
    <div>App</div>
  )
}

export default App