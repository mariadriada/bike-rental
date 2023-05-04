import { GlobalStoreProvider } from './redux-toolkit/StoreProvider'

import './App.css'

function App() {

  return (
    <GlobalStoreProvider>
      home
    </GlobalStoreProvider>
  )
}

export default App
