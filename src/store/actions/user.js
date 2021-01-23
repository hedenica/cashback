import UserConstants from '../constants/user';

const getUsers = ({ email, password }) => ({
  type: UserConstants.AUTHENTICATE_USER,
  payload: { email, password },
})

const addUser = ({ name, cpf, email, password }) => ({
  type: UserConstants.ADD_USER,
  payload: { name, cpf, email, password }
})

export {
  getUsers,
  addUser
}