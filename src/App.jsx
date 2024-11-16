import store from "./store";
import * as actions from "./actionTypes";

const App = () => {
  const unsubscribe = store.subscribe(() => {
    console.log('Store Changed', store.getState())
  })

  store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug1"
    }
  })

  unsubscribe()

  store.dispatch({
    type: actions.BUG_REMOVE,
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