import { combineReducers } from 'redux'

import purchasesReducer from './reducers/purchases';
import usersReducer from './reducers/users';

export default combineReducers({ 
  purchases: purchasesReducer,
  users: usersReducer,
})