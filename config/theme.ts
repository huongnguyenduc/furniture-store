import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    brand: ['#767755'],
    primary: ['#767755'],
    secondary: ['#00A7F4'],
    success: ['#157347'],
    info: ['#31d2f2'],
    warning: ['#ffca2c'],
    danger: ['#dc3545'],
    deepBlue: ['#344659'],
    lightGrey: ['#676564'],
    mediumGrey: ['#151515'],
    softGrey: ['#f8f8f8'],
    lightGreen: ['#F9FAF7'],
    deepGreen: ['#76774A'],
    lightBorder: ['#E9EAE9'],
    mediumBorder: ['#C6BBB3'],
    deepBorder: ['#767676'],
    hoverBackground: ['#F8F8F8'],
    selectedBackground: ['#F2ECE5'],
    brownBackground: ['#AFA196'],
    hoverBrown: ['#9b9188'],
    mixGrey: ['#666'],
  },
  primaryColor: 'brand',
  fontFamily: 'Calibre, sans serif',
  fontSizes: {
    xs: 13,
    sm: 14,
    md: 15,
    lg: 18,
    xl: 24,
  },
  lineHeight: '19px',
  headings: {
    fontFamily: 'Calibre, sans serif',
    fontWeight: 500,
    sizes: {
      h1: { fontSize: '38px', lineHeight: '48px' },
      h2: { fontSize: '30px', lineHeight: '40px' },
      h3: { fontSize: '22px', lineHeight: '26px' },
      h4: { fontSize: '17px', lineHeight: '24px' },
      h5: { fontSize: '15px', lineHeight: '20px' },
      h6: { fontSize: '13px', lineHeight: '16px' },
    },
  },
  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  other: {
    defaultText: {
      desktop: 'lg',
      mobile: 'sm',
    },
    lineHeights: {
      xs: '14px',
      sm: '15px',
      md: '17px',
      lg: '19px',
      xl: '22px',
    },
  },
};
