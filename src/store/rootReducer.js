import { combineReducers } from 'redux'

import purchasesReducer from './reducers/purchases';

export default combineReducers({ 
  purchases: purchasesReducer,
})