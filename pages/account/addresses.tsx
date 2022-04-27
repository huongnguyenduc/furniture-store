import React, { ReactElement } from 'react';
import AccountLayout from '../../components/Layout/AccountLayout/AccountLayout';

const Addresses = () => {
  return <div>Addresses</div>;
};

Addresses.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default Addresses;
