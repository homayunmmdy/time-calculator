import store from "./customStore"
import * as actions from './actions'
const App = () => {
  store.subscribe(() => {
    console.log("Store changed")
  })
  store.dispatch(actions.bugAdded("Bug 1"))
  console.log(store.getState())
  return (
    <div>App</div>
  )
}

export default App