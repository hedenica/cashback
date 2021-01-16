import PurchaseConstants from '../constants/purchases';

const getPurchases = (id) => ({
  type: PurchaseConstants.GET_PURCHASES,
  payload: id,
});

const addPurchase = ({ date, code, value }) => ({
  type: PurchaseConstants.ADD_PURCHASE,
  payload: { date, code, value }
});

const deletePurchase = ({ userId, purchaseId }) => ({
  type: PurchaseConstants.DELETE_PURCHASE,
  payload: { userId, purchaseId }
})

export {
  getPurchases,
  addPurchase,
  deletePurchase,
}
