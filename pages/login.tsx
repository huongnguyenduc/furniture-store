import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Image,
  List,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { signIn, getCsrfToken, SignInResponse } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { useForm } from '@mantine/form';

const Login = ({ csrfToken }: { csrfToken: string | undefined }) => {
  const matchMd = useMediaQuery('(min-width: 992px)', false);
  const matchSm = useMediaQuery('(min-width: 768px)', false);
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
    const res: SignInResponse | undefined = await signIn('credentials', {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: `${window.location.origin}`,
    });
    if (res !== undefined) {
      const { error, url } = res;
      console.log(res);
      if (error) {
        setFormError(error);
      } else {
        setFormError(null);
      }
      if (url) Router.push(url);
    }
  };
  return (
    <Container size="lg" py={72} px={0}>
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
              >
                Login
              </Button>
              <Link href="/hello" passHref>
                <Anchor
                  sx={(theme) => ({
                    color: '#4F8DC1',
                    transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      color: '#6FB3F2',
                    },
                  })}
                  component="a"
                >
                  Forgot password?
                </Anchor>
              </Link>
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
