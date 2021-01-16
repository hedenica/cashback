import React from 'react';
import { useDispatch } from 'react-redux';

import { format } from 'date-fns';
import PropTypes from 'prop-types';

import Purchase from './Purchase';
import * as PurchasesActions from '../../store/actions/purchases';

import formatValue from '../../utils/formatValue';
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
          date={format(Date.parse(purchase.date), 'dd/MM/yyyy')}
          value={formatValue(parseFloat(purchase.value))}
          status={getCashbackStatus(parseFloat(purchase.value))}
          percentage={getCashbackPercentage(
            parseFloat(purchase.value),
            getCashbackStatus(parseFloat(purchase.value)),
          )}
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
