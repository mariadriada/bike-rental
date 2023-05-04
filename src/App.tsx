import { GlobalStoreProvider } from './redux-toolkit/StoreProvider'
import { CustomRouterProvider } from './router'

import './App.css'

function App() {

  return (
    <GlobalStoreProvider>
      <CustomRouterProvider/>
    </GlobalStoreProvider>
  )
}

export default App
