import { Box, Image, Text } from '@mantine/core';
import React from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params) => ({
  productItem: {
    width: '100%',
    margin: '0 5px 7px',
    padding: '15px 25px 52px',
    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 0 2px 0.5px rgb(21 21 21 / 5%), 0 1px 5px 0 rgb(21 21 21 / 15%)',
    },
    // Dynamic media queries, define breakpoints in theme, use anywhere
  },
}));

const ProductItem = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.productItem}>
      <Image
        alt="image"
        src="https://media.interiordefine.com/media/catalog/product/cache/1/small_image/367x252/d1eeb9ab675959a226cfd51daf82850d/a/l/alxr.leathr.char.accent.jpg"
      />
      <Text sx={(theme) => ({ color: theme.colors.lightGrey, letterSpacing: 0.5 })} mt="sm">
        Alexander Leather Accent Chair Leather
      </Text>
      <Text sx={(theme) => ({ color: theme.colors.lightGrey, letterSpacing: 0.5 })} mt="sm">
        From $1592
      </Text>
      <Text sx={(theme) => ({ color: '#aaa', letterSpacing: 0.5 })} mt="sm">
        20+ legs
      </Text>
    </Box>
  );
};

export default ProductItem;
