import { Box, Button, Grid, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import React, { ReactElement } from 'react';
import { useForm } from '@mantine/form';
import AccountLayout from '../../components/Layout/AccountLayout/AccountLayout';
import { createStyles } from '@mantine/core';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { axiosFetcher } from '../../utils/fetcher';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme, _params) => ({
  sectionContainer: {
    padding: '1.65em 19px 2.8em',
    border: `1px solid ${theme.colors.lightBorder}`,
    borderRadius: '5px',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: '1.65em 29px 2.8em',
    },
  },
}));

interface User {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  address: string;
  imgUrl: string;
  email: string;
}
export interface UserResponse {
  content: User;
  error: string;
  status: number;
  timestamp: string;
}

const EditAccount = () => {
  const router = useRouter();
  const { referrer } = router.query;
  const { data: session } = useSession();
  const { data, error } = useSWR<UserResponse>(
    () => [`profile/me`, 'GET', {}, session?.accessToken],
    axiosFetcher,
    {
      onSuccess: (data) => {
        const { username, firstName, lastName, phoneNo, address, email } = data.content;
        form.setValues({ username, firstName, lastName, phoneNo, address, email });
      },
    }
  );
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      phoneNo: '',
      username: '',
    },

    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value.toLowerCase()
        )
          ? null
          : 'Invalid email',
      username: (value) => (value.length > 3 ? null : 'Invalid username'),
      address: (value) =>
        value == undefined
          ? 'Address is required'
          : /^[#.0-9a-zA-Z\s,-]+$/u.test(value)
          ? null
          : 'Invalid Address',
      firstName: (value) =>
        value == undefined
          ? 'First name is required'
          : /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
              value
            )
          ? null
          : 'Invalid First name',
      phoneNo: (value) =>
        value == undefined
          ? 'Phone number is required'
          : /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)
          ? null
          : 'Invalid Phone number',
      lastName: (value) =>
        value == undefined
          ? 'Last name is required'
          : /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
              value
            )
          ? null
          : 'Invalid Last name',
      // password: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
    },
  });
  const passwordForm = useForm({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },

    validate: {
      oldPassword: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
      newPassword: (value) => (value.length > 6 && /.\S/.test(value) ? null : 'Invalid password'),
      confirmPassword: (value, values) =>
        value !== values.newPassword ? 'Passwords did not match' : null,
    },
  });
  const [formError, setFormError] = React.useState<string | null>(null);
  const [formPasswordError, setFormPasswordError] = React.useState<string | null>(null);
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
              Edit User Information
            </Text>
            <Box>
              <form
                onSubmit={form.onSubmit(async (values) => {
                  const updateUserResponse = await axiosFetcher(
                    'profile/me',
                    'PUT',
                    {
                      ...values,
                      imgUrl: '',
                    },
                    session?.accessToken
                  );
                  if (updateUserResponse.status === 200) {
                    setFormError(null);
                    showNotification({
                      title: 'Success!',
                      message: 'Update user profile successfully!',
                      color: 'blue',
                    });
                    if (referrer) {
                      router.push(`/${referrer}`);
                    }
                  } else {
                    setFormError(updateUserResponse.message);
                  }
                })}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <Text color="red">{formError}</Text>
                <TextInput label="First Name" size="md" {...form.getInputProps('firstName')} />
                <TextInput label="Last Name" size="md" {...form.getInputProps('lastName')} />
                <TextInput label="Email Address" size="md" {...form.getInputProps('email')} />
                <TextInput label="Address" size="md" {...form.getInputProps('address')} />
                <TextInput label="Phone number" size="md" {...form.getInputProps('phoneNo')} />
                <TextInput label="Username" size="md" {...form.getInputProps('username')} />
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
                onSubmit={passwordForm.onSubmit(async (values) => {
                  const updatePasswordResponse = await axiosFetcher(
                    'profile/me/change-password',
                    'POST',
                    {
                      ...values,
                      username: data?.content.username,
                    },
                    session?.accessToken
                  );
                  if (updatePasswordResponse.status === 200) {
                    setFormPasswordError(null);
                    showNotification({
                      title: 'Success!',
                      message: 'Update user password successfully!',
                      color: 'blue',
                    });
                  } else {
                    setFormPasswordError(updatePasswordResponse.message);
                  }
                })}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <Text color="red">{formPasswordError}</Text>
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
                  {...passwordForm.getInputProps('oldPassword')}
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
