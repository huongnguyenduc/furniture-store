import { MantineTheme } from '@mantine/core';

export const styles = {
  Breadcrumbs: (theme: MantineTheme) => ({
    root: {
      '& .mantine-Anchor-root': {
        color: `${theme.colors.dark[9]}`,
        fontSize: `${theme.fontSizes.sm}px`,
        fontWeight: '300 !important',
      },
      '& .mantine-Text-root': {
        color: `${theme.colors.dark[9]}`,
        fontSize: `${theme.fontSizes.sm}px`,
        fontWeight: '500',
      },
    },
  }),
};
