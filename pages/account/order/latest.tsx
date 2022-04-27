import React, { ReactElement } from 'react';
import AccountLayout from '../../../components/Layout/AccountLayout/AccountLayout';

const LatestOrder = () => {
  return <div>LatestOrder</div>;
};

LatestOrder.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default LatestOrder;
