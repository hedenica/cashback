import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from '../../service/api';

import PurchasesConstants from '../../store/constants/purchases';

function* getPurchases({ payload }) {
  const { userId } = payload 
  try {
    const { data } = yield call(api.get, `/${userId}/purchases`)

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
    const { data } = yield call(api.post, '/1/purchases', {...payload })

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
   const { data } =  yield call(api.delete, `/${userId}/purchases/${purchaseId}`)

   console.table(data)

    yield put({
      type: PurchasesConstants.DELETE_PURCHASE_SUCCESS,
      payload: data,
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