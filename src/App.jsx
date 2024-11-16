import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

const App = () => {
  const unsubscribe = store.subscribe(() => {
    console.log('Store Changed', store.getState())
  })

  store.dispatch(bugAdded('Bug 1'))
  store.dispatch(bugResolved(1))
  unsubscribe()

  store.dispatch(bugRemoved(1))

  console.log(store.getState())
  return (
    <div>App</div>
  )
}

export default App