import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from '../../styles/global'
import Routes from '../../routes'

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    <GlobalStyles />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
)

export default App
