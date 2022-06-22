import { Box, Button, Container, Group, PasswordInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import React from 'react';
import { axiosFetcher } from '../utils/fetcher';
import Router, { useRouter } from 'next/router';

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;
  const passwordForm = useForm({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },

    validate: {
      newPassword: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
      confirmPassword: (value, values) =>
        value !== values.newPassword ? 'Passwords did not match' : null,
    },
  });
  const [formPasswordError, setFormPasswordError] = React.useState<string | null>(null);
  return (
    <Container size="xs" py={72} px={0}>
      <Box>
        <Text
          sx={(theme) => ({
            color: theme.colors.lightGrey,
            marginBottom: '0.85em',
          })}
          size="xl"
          transform="capitalize"
        >
          Reset Your Password?
        </Text>
        <Text
          sx={(theme) => ({
            color: theme.colors.lightGrey,
            lineHeight: 1.35,
            letterSpacing: '0.023em',
          })}
        >
          Please enter your email, new password and confirmation below.
        </Text>
        <Box>
          <form
            onSubmit={passwordForm.onSubmit(async (values) => {
              const updatePasswordResponse = await axiosFetcher('auth/reset-password', 'POST', {
                password: values.newPassword,
                token,
              });
              if (updatePasswordResponse.status === 200) {
                setFormPasswordError(null);
                showNotification({
                  title: 'Success!',
                  message: 'Reset user password successfully!',
                  color: 'blue',
                });
                Router.push('/login?verified=true');
              } else {
                setFormPasswordError(updatePasswordResponse.errors);
              }
            })}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <Text color="red">{formPasswordError}</Text>
            <PasswordInput
              label="New Password"
              styles={(theme) => ({
                label: {
                  color: theme.colors.lightGrey,
                  lineHeight: 1.35,
                  letterSpacing: '0.023em',
                  fontWeight: 400,
                },
              })}
              size="md"
              {...passwordForm.getInputProps('newPassword')}
            />
            <PasswordInput
              label="Confirm New Password"
              styles={(theme) => ({
                label: {
                  color: theme.colors.lightGrey,
                  lineHeight: 1.35,
                  letterSpacing: '0.023em',
                  fontWeight: 400,
                },
              })}
              size="md"
              {...passwordForm.getInputProps('confirmPassword')}
            />
            <Group position="left">
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
      </Box>
    </Container>
  );
};

export default ResetPassword;
