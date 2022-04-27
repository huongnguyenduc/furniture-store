import { MantineTheme } from '@mantine/core';

export const styles = {
  TextInput: (theme: MantineTheme) => ({
    input: {
      transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:focus': {
        boxShadow: `inset 0 0 0 1px ${theme.colors.lightGrey}`,
      },
    },
    label: {
      color: theme.colors.lightGrey,
      lineHeight: 1.35,
      letterSpacing: '0.023em',
      fontWeight: 400,
    },
  }),
  PasswordInput: (theme: MantineTheme) => ({
    input: {
      transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:focus': {
        boxShadow: `inset 0 0 0 1px ${theme.colors.lightGrey}`,
      },
    },
    label: {
      color: theme.colors.lightGrey,
      lineHeight: 1.35,
      letterSpacing: '0.023em',
      fontWeight: 400,
    },
  }),
};
