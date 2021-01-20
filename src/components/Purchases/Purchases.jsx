import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Purchase from './Purchase';
import * as PurchasesActions from '../../store/actions/purchases';

import formatValue from '../../utils/formatValue';
import dateFormatter from '../../utils/date';
import {
  getCashbackStatus,
  getCashbackPercentage,
  getCashbackValue,
} from '../../utils/cashback';

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
          date={dateFormatter(purchase.date)}
          value={formatValue(parseFloat(purchase.value))}
          status={getCashbackStatus(parseFloat(purchase.value))}
          percentage={getCashbackPercentage(parseFloat(purchase.value))}
          cashback={formatValue(
            getCashbackValue(
              parseFloat(purchase.value),
              getCashbackPercentage(
                parseFloat(purchase.value),
                getCashbackStatus(parseFloat(purchase.value)),
              ),
            ),
          )}
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
