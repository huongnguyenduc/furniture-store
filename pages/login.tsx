import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Image,
  List,
  Modal,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Router, { useRouter } from 'next/router';
import React from 'react';
import { signIn, getCsrfToken, SignInResponse } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { useForm } from '@mantine/form';
import { axiosFetcher } from '../utils/fetcher';

const Login = ({ csrfToken }: { csrfToken: string | undefined }) => {
  const router = useRouter();
  const { referrer, id, verified, registering } = router.query;
  const matchMd = useMediaQuery('(min-width: 992px)', false);
  const matchSm = useMediaQuery('(min-width: 768px)', false);
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) => (value.length > 3 ? null : 'Invalid username'),
      password: (value) => (value.length > 3 && /.\S/.test(value) ? null : 'Invalid password'),
    },
  });
  type FormValues = typeof form.values;

  const [formError, setFormError] = React.useState<string | null>(null);

  const handleSubmit = async (values: FormValues) => {
    setIsLoggingIn(true);
    const res: SignInResponse | undefined = await signIn('credentials', {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: `${window.location.origin}`,
    });
    setIsLoggingIn(false);
    if (res !== undefined) {
      const { error, url } = res;
      if (error) {
        setFormError(error);
      } else {
        setFormError(null);
      }
      if (url) {
        if (referrer && id) Router.push(`/${referrer}?id=${id}`);
        else Router.push(url);
      }
    }
  };
  const [isForgotModalOpened, setIsForgotModalOpened] = React.useState<string>('not-open');
  const [forgotFormError, setForgotFormError] = React.useState<string | null>(null);
  const forgotForm = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value.toLowerCase()
        )
          ? null
          : 'Invalid email',
    },
  });
  type FormForgotValues = typeof forgotForm.values;
  const handleForgotSubmit = async (values: FormForgotValues) => {
    setIsForgotModalOpened('verifying');
    const forgotPasswordResponse = await axiosFetcher(`auth/forgot-password?email=${values.email}`);
    if (forgotPasswordResponse.status === 200) {
      setForgotFormError(null);
      setIsForgotModalOpened('verified');
    } else {
      setForgotFormError(forgotPasswordResponse.errors);
    }
  };
  return (
    <>
      <Modal
        opened={isForgotModalOpened === 'opened' || isForgotModalOpened === 'verifying'}
        onClose={() => setIsForgotModalOpened('not-open')}
        title="Forgot Your Password?"
      >
        <Box>
          <form
            onSubmit={forgotForm.onSubmit(handleForgotSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.lightGrey,
                lineHeight: 1.35,
                letterSpacing: '0.023em',
              })}
            >
              Please enter your email address below. You will receive a link to reset your password.
            </Text>
            <TextInput label="Email Address" size="md" {...forgotForm.getInputProps('email')} />
            <Text color="red">{forgotFormError}</Text>
            <Button
              type="submit"
              size="md"
              radius="xl"
              styles={(theme) => ({
                label: {
                  color: theme.white,
                  lineHeight: 1.35,
                  letterSpacing: '0.023em',
                  fontWeight: 400,
                },
              })}
              sx={(theme) => ({
                backgroundColor: theme.colors.brownBackground,
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: theme.colors.hoverBrown,
                },
              })}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <Container size="lg" py={72} px={0}>
        {registering ? (
          <Box
            sx={(theme) => ({
              border: `1px solid ${theme.colors.mediumBorder}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
            p={20}
            mb={20}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.brownBackground,
                lineHeight: 1.35,
                letterSpacing: '0.025em',
              })}
            >
              If there is no account associated with {registering} you will receive an email with a
              link to confirm your new account.
            </Text>
          </Box>
        ) : (
          <></>
        )}
        {isForgotModalOpened === 'verified' ? (
          <Box
            sx={(theme) => ({
              border: `1px solid ${theme.colors.mediumBorder}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
            py={20}
            mb={20}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.brownBackground,
                lineHeight: 1.35,
                letterSpacing: '0.025em',
              })}
            >
              If there is an account associated with {forgotForm.values.email} you will receive an
              email with a link to reset your password.
            </Text>
          </Box>
        ) : (
          <></>
        )}
        {verified ? (
          <Box
            sx={(theme) => ({
              border: `1px solid ${theme.colors.mediumBorder}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
            py={20}
            mb={20}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.brownBackground,
                lineHeight: 1.35,
                letterSpacing: '0.025em',
              })}
            >
              Your password has been updated.
            </Text>
          </Box>
        ) : (
          <></>
        )}
        <Box>
          <Grid justify="center" align="center">
            <Grid.Col sm={4}>
              <form
                onSubmit={form.onSubmit(handleSubmit)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  padding: `0 ${matchSm ? 0 : 24}`,
                }}
              >
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                <Text
                  sx={(theme) => ({
                    color: theme.colors.brownBackground,
                    lineHeight: 1.225,
                    letterSpacing: '0.023em',
                  })}
                  size="xl"
                >
                  Log In to Your Account
                </Text>
                <Text
                  sx={(theme) => ({
                    color: theme.colors.lightGrey,
                    lineHeight: 1.35,
                    letterSpacing: '0.023em',
                  })}
                >
                  Check your order status, update your billing info, and review past purchases.
                </Text>
                <Text color="red">{formError}</Text>
                <TextInput label="Username" size="md" {...form.getInputProps('username')} />
                <PasswordInput
                  styles={(theme) => ({
                    label: {
                      color: theme.colors.lightGrey,
                      lineHeight: 1.35,
                      letterSpacing: '0.023em',
                      fontWeight: 400,
                    },
                  })}
                  label="Password"
                  size="md"
                  {...form.getInputProps('password')}
                />
                <Button
                  size="md"
                  radius="xl"
                  type="submit"
                  styles={(theme) => ({
                    label: {
                      color: theme.white,
                      lineHeight: 1.35,
                      letterSpacing: '0.023em',
                      fontWeight: 400,
                    },
                  })}
                  sx={(theme) => ({
                    backgroundColor: theme.colors.brownBackground,
                    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: theme.colors.hoverBrown,
                    },
                  })}
                  loading={isLoggingIn}
                >
                  Login
                </Button>
                <Anchor
                  sx={(theme) => ({
                    color: '#4F8DC1',
                    transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      color: '#6FB3F2',
                    },
                  })}
                  onClick={() => setIsForgotModalOpened('opened')}
                >
                  Forgot password?
                </Anchor>
              </form>
            </Grid.Col>
            <Grid.Col sm={1} />
            <Grid.Col sm={6}>
              <Box
                sx={{
                  background: 'rgba(242, 236, 229, 0.3)',
                  padding: matchMd ? '3.7em 60px' : '1.5em 20px',
                  borderRadius: '10px',
                }}
              >
                <Text
                  sx={(theme) => ({
                    color: theme.colors.lightGrey,
                    lineHeight: 1.225,
                    letterSpacing: '0.023em',
                  })}
                  size="xl"
                >
                  New Customer? Create an Account.
                </Text>
                <Text
                  sx={(theme) => ({
                    color: theme.colors.lightGrey,
                    lineHeight: 1.35,
                    letterSpacing: '0.023em',
                  })}
                  mt={36}
                  mb={16}
                >
                  Registering takes two minutes — and it’s worth it:
                </Text>
                <Grid>
                  <Grid.Col span={7}>
                    <List
                      styles={(theme) => ({
                        item: {
                          color: theme.colors.lightGrey,
                          lineHeight: 1.35,
                          letterSpacing: '0.023em',
                          padding: '0 0 0 1.45em',
                          margin: '0 0 .6em',
                        },
                      })}
                    >
                      <List.Item>Get real-time updates on your order status.</List.Item>
                      <List.Item>Schedule your delivery.</List.Item>
                      <List.Item>Update your billing info for quicker checkout.</List.Item>
                      <List.Item>Review past purchases.</List.Item>
                    </List>
                    <Box
                      sx={(theme) => ({
                        marginTop: '2.4em',
                        padding: '0 2em',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '17px',
                        letterSpacing: '.4px',
                        border: '1px solid #ddd',
                        borderRadius: '30px',
                        color: theme.colors.lightGrey,
                        whiteSpace: 'nowrap',
                        height: '60px',
                        lineHeight: '57px',
                        transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          borderColor: '#aaa',
                        },
                      })}
                      onClick={() => {
                        Router.push('/signup');
                      }}
                    >
                      Create an account
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={5}>
                    <Image src="https://media.interiordefine.com/media/wysiwyg/account/Tracker_UI-desktop.jpg" />
                  </Grid.Col>
                </Grid>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps<{ csrfToken: string | undefined }> = async (
  context
) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};
