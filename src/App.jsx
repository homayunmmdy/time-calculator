import store from "./customStore"
import * as actions from './actions'
const App = () => {
  store.dispatch(actions.bugAdded("Bug 1"))
  console.log(store.getState())
  return (
    <div>App</div>
  )
}

export default App