import React, { ReactElement } from 'react';
import AccountLayout from '../../../components/Layout/AccountLayout/AccountLayout';

const OrderHistory = () => {
  return <div>OrderHistory</div>;
};

OrderHistory.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default OrderHistory;
