import { all, takeLatest, call, put, select } from 'redux-saga/effects'

import api from '../../service/api';

import PurchasesConstants from '../../store/constants/purchases';

function* getPurchases() {
  const { data: { id } } = yield select(state => state.users)

  try {
    const { data } = yield call(api.get, `users/${id}/purchases`)

    yield put({
      type: PurchasesConstants.GET_PURCHASES_SUCCESS,
      payload: data,
    })
  }
  catch(error) {
    yield put({
      type: PurchasesConstants.GET_PURCHASES_FAILURE,
      payload: error,
    })
  }
}

function* addPurchase({ payload }) {
  try {
    const { data: { id } } = yield select(state => state.users)

    const { data } = yield call(api.post, `users/${id}/purchases`, {...payload })

    yield put({
      type: PurchasesConstants.ADD_PURCHASE_SUCCESS,
      payload: data,
    })
  }
  catch(error) {
    yield put({
      type: PurchasesConstants.ADD_PURCHASE_FAILURE,
      payload: error,
    })
  }
}

function* deletePurchase({ payload }) {
  const { userId, purchaseId } = payload
  
  try {
   yield call(api.delete, `users/${userId}/purchases/${purchaseId}`)
  
    yield put({
      type: PurchasesConstants.DELETE_PURCHASE_SUCCESS,
    })

    yield put({
      type: PurchasesConstants.GET_PURCHASES,
    })
  } catch(error) {
    yield put({
      type: PurchasesConstants.DELETE_PURCHASE_FAILURE,
      payload: error,
    })

  }
}

export default all([
  takeLatest(
    PurchasesConstants.GET_PURCHASES,
    getPurchases
  ),
  takeLatest(
    PurchasesConstants.ADD_PURCHASE,
    addPurchase
  ),
  takeLatest(
    PurchasesConstants.DELETE_PURCHASE,
    deletePurchase
  )
])