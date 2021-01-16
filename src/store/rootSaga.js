import { all } from 'redux-saga/effects'

import purchases from './sagas/purchases';

export default function* rootSaga() {
  return yield all([
    purchases
  ])
}