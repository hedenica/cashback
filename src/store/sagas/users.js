import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../service/api';

import UserConstants from '../../store/constants/user';

function* authenticateUser({ payload }) {
  const { email, password } = payload;

  try {
    const { data }  = yield call(api.get, `/users?search=${email}`)

    const foundUser = data.find(user => user.email === email 
      && user.password === password
    )

    if (!foundUser) {
      throw Error('Usuário ou senha inválidos')
    }

    yield put({
      type: UserConstants.AUTHENTICATE_USER_SUCCESS,
      payload: foundUser,
    })
  }
  catch(error) {
    toast.error('E-mail ou senha incorretos 👎')

    yield put({
      type: UserConstants.AUTHENTICATE_USER_FAILURE,
      payload: error,
    })

  }
}

function* addUser({ payload }) {
  try {
    const { data } = yield call(api.post, 'users', {...payload })
  
    yield put({
      type: UserConstants.ADD_USER_SUCCESS,
      payload: data,
    })
  }
  catch(error) {
    yield put({
      type: UserConstants.ADD_USER_FAILURE,
      payload: error,
    })
  }
}

export default all([
  takeLatest(
    UserConstants.AUTHENTICATE_USER,
    authenticateUser
  ),
  takeLatest(
    UserConstants.ADD_USER,
    addUser
  ),
])