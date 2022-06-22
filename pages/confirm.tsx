import React from 'react';
import Router, { useRouter } from 'next/router';
import { axiosFetcher } from '../utils/fetcher';
import { showNotification } from '@mantine/notifications';
import { Container, Text } from '@mantine/core';

const ConfirmEmail = () => {
  const router = useRouter();
  const { token } = router.query;
  const [confirmStatus, setConfirmStatus] = React.useState('not-load');
  const [registerError, setRegisterError] = React.useState<string | null>(null);
  async function confirmEmail() {
    setConfirmStatus('confirming');
    const updatePasswordResponse = await axiosFetcher(`auth/confirm-email?token=${token}`);
    if (updatePasswordResponse.status === 200) {
      setRegisterError(null);
      setConfirmStatus('confirmed');
      showNotification({
        title: 'Success!',
        message: 'Create new user successfully!',
        color: 'blue',
      });
      Router.push('/login');
    } else {
      setConfirmStatus('error');
      setRegisterError(updatePasswordResponse.errors);
    }
  }
  React.useEffect(() => {
    if (token) {
      confirmEmail();
    }
  }, [token]);
  return (
    <Container size="xs" py={72} px={0}>
      {confirmStatus === 'not-load' ? (
        <></>
      ) : confirmStatus === 'confirming' ? (
        <Text
          sx={(theme) => ({
            color: theme.colors.lightGrey,
            marginBottom: '0.85em',
          })}
          size="xl"
          transform="capitalize"
        >
          Confirming your email...
        </Text>
      ) : confirmStatus === 'confirmed' ? (
        <Text
          sx={(theme) => ({
            color: theme.colors.lightGrey,
            marginBottom: '0.85em',
          })}
          size="xl"
          transform="capitalize"
        >
          Your email is confirmed. Redirect to login page...
        </Text>
      ) : (
        <Text
          sx={(theme) => ({
            color: 'red',
            marginBottom: '0.85em',
          })}
          size="xl"
          transform="capitalize"
        >
          {registerError}
        </Text>
      )}
    </Container>
  );
};

export default ConfirmEmail;
