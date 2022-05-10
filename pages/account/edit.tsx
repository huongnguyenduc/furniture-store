import { Box, Button, Grid, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import React, { ReactElement } from 'react';
import { useForm } from '@mantine/form';
import AccountLayout from '../../components/Layout/AccountLayout/AccountLayout';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params) => ({
  sectionContainer: {
    padding: '1.65em 19px 2.8em',
    border: `1px solid ${theme.colors.lightBorder}`,
    borderRadius: '5px',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      padding: '1.65em 29px 2.8em',
    },
  },
}));

const EditAccount = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },

    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value.toLowerCase()
        )
          ? null
          : 'Invalid email',
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
  const passwordForm = useForm({
    initialValues: {
      current: '',
      new: '',
      confirmNew: '',
    },

    validate: {
      current: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
      new: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
      confirmNew: (value, values) => (value !== values.new ? 'Passwords did not match' : null),
    },
  });
  return (
    <Box py={32}>
      <Grid>
        <Grid.Col sm={7}>
          <Box className={classes.sectionContainer}>
            <Text
              sx={(theme) => ({
                color: theme.colors.lightGrey,
                marginBottom: '0.85em',
              })}
              size="xl"
              transform="capitalize"
            >
              Edit Contact Information
            </Text>
            <Box>
              <form
                onSubmit={form.onSubmit((values) => console.log(values))}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <TextInput label="First Name" size="md" {...form.getInputProps('firstName')} />
                <TextInput label="Last Name" size="md" {...form.getInputProps('lastName')} />
                <TextInput label="Email Address" size="md" {...form.getInputProps('email')} />
                <PasswordInput
                  label="Current Password"
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
                    Save
                  </Button>
                </Group>
              </form>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col sm={5}>
          <Box className={classes.sectionContainer}>
            <Text
              sx={(theme) => ({
                color: theme.colors.lightGrey,
                marginBottom: '0.85em',
              })}
              size="xl"
              transform="capitalize"
            >
              Change Password
            </Text>
            <Box>
              <form
                onSubmit={passwordForm.onSubmit((values) => console.log(values))}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <PasswordInput
                  label="Current Password"
                  styles={(theme) => ({
                    label: {
                      color: theme.colors.lightGrey,
                      lineHeight: 1.35,
                      letterSpacing: '0.023em',
                      fontWeight: 400,
                    },
                  })}
                  size="md"
                  {...passwordForm.getInputProps('current')}
                />
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
                  {...passwordForm.getInputProps('new')}
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
                  {...passwordForm.getInputProps('confirmNew')}
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
                    Save
                  </Button>
                </Group>
              </form>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

EditAccount.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default EditAccount;
