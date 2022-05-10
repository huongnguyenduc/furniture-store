import { Box, Button, Container, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

const SignUp = () => {
  const form = useForm({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
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
      firstName: (value) =>
        value == undefined
          ? 'First name is required'
          : /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
              value
            )
          ? null
          : 'Invalid First name',
      lastName: (value) =>
        value == undefined
          ? 'Last name is required'
          : /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
              value
            )
          ? null
          : 'Invalid Last name',
      password: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
    },
  });
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
          onSubmit={form.onSubmit((values) => console.log(values))}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          autoComplete="off"
        >
          <TextInput label="First Name" size="md" {...form.getInputProps('firstName')} />
          <TextInput label="Last Name" size="md" {...form.getInputProps('lastName')} />
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
