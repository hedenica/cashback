import produce from 'immer';

import UserConstants from '../constants/user';

const INITIAL_STATE ={
  loading: false,
  data: {},
  error: null,
  isLogged: false,
}

const usersReducer = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserConstants.AUTHENTICATE_USER: {
        draft.loading = true;
        draft.error = null;
        
        break;
      }

      case UserConstants.AUTHENTICATE_USER_SUCCESS: {
        draft.data = action.payload
        draft.loading = false;
        draft.error = null;
        draft.isLogged = true;
        
        break;
      }

      case UserConstants.AUTHENTICATE_USER_FAILURE: {
        draft.data = {}
        draft.loading = false;
        draft.error = action.payload;
        
        break;
      }

      case UserConstants.ADD_USER: {
        draft.loading = true;
        draft.error = null;
        
        break;
      }

      case UserConstants.ADD_USER_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = null;
        draft.isLogged = true;

        break;
      }

      case UserConstants.ADD_USER_FAILURE: {
        draft.loading = false;
        draft.error = action.payload;
      }
    }
  })
}

export default usersReducer;