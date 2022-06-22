import { Box, Button, Container, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';
import { axiosFetcher } from '../utils/fetcher';
import { signIn, getCsrfToken, SignInResponse } from 'next-auth/react';
import Router from 'next/router';
import { showNotification } from '@mantine/notifications';

const SignUp = () => {
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value.toLowerCase()
        )
          ? null
          : 'Invalid email',
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
      username: (value) => (value.length > 3 ? null : 'Invalid username'),
      // firstName: (value) =>
      //   value == undefined
      //     ? 'First name is required'
      //     : /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      //         value
      //       )
      //     ? null
      //     : 'Invalid First name',
      // lastName: (value) =>
      //   value == undefined
      //     ? 'Last name is required'
      //     : /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      //         value
      //       )
      //     ? null
      //     : 'Invalid Last name',
      password: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
    },
  });
  const [formError, setFormError] = React.useState<string | null>(null);
  const [isSigningUp, setIsSigningUp] = React.useState<boolean>(false);
  return (
    <Container size="xs" py={96}>
      <Box>
        <Text
          sx={(theme) => ({
            color: theme.colors.brownBackground,
            lineHeight: 1.225,
            letterSpacing: '0.023em',
          })}
          size="xl"
          mb={28}
        >
          Create an Account
        </Text>
      </Box>
      <Box>
        <form
          onSubmit={form.onSubmit(async (values) => {
            setIsSigningUp(true);
            const registerResponse = await axiosFetcher('auth/register', 'POST', { ...values });
            setIsSigningUp(false);
            if (registerResponse.status === 201) {
              setFormError(null);
              showNotification({
                title: 'Verifying your email!',
                message: 'Wait to confirm your email',
                color: 'yellow',
              });
              Router.push(`/login?registering=${values.email}`);
              // const res: SignInResponse | undefined = await signIn('credentials', {
              //   redirect: false,
              //   username: values.username,
              //   password: values.password,
              //   callbackUrl: `${window.location.origin}`,
              // });
              // if (res !== undefined) {
              //   const { error, url } = res;
              //   console.log(res);
              //   if (error) {
              //     setFormError(error);
              //   } else {
              //     setFormError(null);
              //   }
              //   if (url) {
              //     Router.push(url);

              // }
              // }
            } else {
              setFormError(registerResponse.error);
            }
            console.log(values);
          })}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          autoComplete="off"
        >
          <Text color="red">{formError}</Text>
          <TextInput label="Username" size="md" {...form.getInputProps('username')} />
          <TextInput
            label="Email Address"
            autoComplete="off"
            size="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            autoComplete="off"
            description="(6 or more characters, no spaces)"
            styles={(theme) => ({
              label: {
                color: theme.colors.lightGrey,
                lineHeight: 1.35,
                letterSpacing: '0.023em',
                fontWeight: 400,
              },
            })}
            size="md"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirm Password"
            description="(6 or more characters, no spaces)"
            styles={(theme) => ({
              label: {
                color: theme.colors.lightGrey,
                lineHeight: 1.35,
                letterSpacing: '0.023em',
                fontWeight: 400,
              },
            })}
            size="md"
            {...form.getInputProps('confirmPassword')}
          />
          <Group position="left" mt="md">
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
              loading={isSigningUp}
            >
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
