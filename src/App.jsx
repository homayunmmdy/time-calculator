import store from "./store";

const App = () => {
  const unsubscribe = store.subscribe(() => {
    console.log('Store Changed', store.getState())
  })

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug1"
    }
  })

  unsubscribe()

  store.dispatch({
    type: "bugRemoved",
    payload: {
      id: 1
    }
  })
  console.log(store.getState())
  return (
    <div>App</div>
  )
}

export default App