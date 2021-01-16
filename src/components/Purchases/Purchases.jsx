import React from 'react';
import { useDispatch } from 'react-redux';

// import { format } from 'date-fns';
import PropTypes from 'prop-types';

import Purchase from './Purchase';
import * as PurchasesActions from '../../store/actions/purchases';

import formatValue from '../../utils/formatValue';

const Purchases = ({ purchases }) => {
  const dispatch = useDispatch();

  const deletePurchase = (userId, purchaseId) => {
    dispatch(PurchasesActions.deletePurchase({ userId, purchaseId }));
  };

  return (
    <div>
      {purchases.map(purchase => (
        <Purchase
          key={purchase.id}
          code={purchase.code}
          date={purchase.date}
          value={formatValue(parseFloat(purchase.value))}
          status="warning"
          onDelete={() => deletePurchase(purchase.userId, purchase.id)}
        />
      ))}
    </div>
  );
};

export default Purchases;

Purchases.propTypes = {
  purchases: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
