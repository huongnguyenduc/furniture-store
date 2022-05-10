import React from 'react';
import { signOut } from 'next-auth/react';

const Logout = () => {
  React.useEffect(() => {
    signOut({ callbackUrl: '/login' });
  }, []);
  return <div>Logging out...</div>;
};

export default Logout;
