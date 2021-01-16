import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import GlobalStyles from '../../styles/global'
import Routes from '../../routes'

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    <GlobalStyles />
    </Provider>
  </React.StrictMode>
)

export default App
