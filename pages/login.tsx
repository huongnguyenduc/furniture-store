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
import React from 'react';

const Login = () => {
  const matchMd = useMediaQuery('(min-width: 992px)');
  const matchSm = useMediaQuery('(min-width: 768px)');
  return (
    <Container size="lg" py={72} px={0}>
      <Box>
        <Grid justify="center" align="center">
          <Grid.Col sm={4}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '36px' }}
              px={matchSm ? 0 : 24}
            >
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
              <TextInput
                styles={(theme) => ({
                  label: {
                    color: theme.colors.lightGrey,
                    lineHeight: 1.35,
                    letterSpacing: '0.023em',
                    fontWeight: 400,
                  },
                })}
                label="Email Address"
                size="md"
              />
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
              />
              <Button
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
            </Box>
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
