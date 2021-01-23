import produce from 'immer';

import PurchasesConstants from '../constants/purchases'

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
}

const purchasesReducer = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PurchasesConstants.GET_PURCHASES: {
        draft.data = [];
        draft.loading = true;
        draft.error = null;

        break;
      }

      case PurchasesConstants.GET_PURCHASES_SUCCESS: {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = null;

        break;
      }

      case PurchasesConstants.GET_PURCHASES_FAILURE: {
        draft.data = [];
        draft.loading = false;
        draft.error = action.payload;

        break;
      }

      case PurchasesConstants.ADD_PURCHASE: {
        draft.loading = true;
        draft.error = null;

        break;
      }

      case PurchasesConstants.ADD_PURCHASE_SUCCESS: {
        draft.data.push(action.payload);
        draft.loading = false;
        draft.error = null;

        break;
      }

      case PurchasesConstants.ADD_PURCHASE_FAILURE: {
        draft.loading = false;
        draft.error = action.payload;

        break;
      }

      default:
        return state
    }
  })
}

export default purchasesReducer;