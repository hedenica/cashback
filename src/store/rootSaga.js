import { all } from 'redux-saga/effects'

import purchases from './sagas/purchases';
import users from './sagas/users';

export default function* rootSaga() {
  return yield all([
    purchases,
    users
  ])
}