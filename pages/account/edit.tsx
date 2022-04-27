import React, { ReactElement } from 'react';
import AccountLayout from '../../components/Layout/AccountLayout/AccountLayout';

const EditAccount = () => {
  return <div>EditAccount</div>;
};

EditAccount.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default EditAccount;
