import { Box, Image, Text } from '@mantine/core';
import React from 'react';
import { createStyles } from '@mantine/core';
import Router from 'next/router';

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
  },
}));

interface ProductItem {
  image: string;
  productId: number;
  productName: string;
  brandName: string;
  variants: { price: number }[];
}

const ProductItem = ({ data }: { data: ProductItem }) => {
  const { classes } = useStyles();
  if (data.variants.length === 0) return <></>;
  return (
    <Box
      className={classes.productItem}
      onClick={() => {
        Router.push(`/product?id=${data.productId}`);
      }}
    >
      <Image alt="image" src={data.image} />
      <Text sx={(theme) => ({ color: theme.colors.lightGrey, letterSpacing: 0.5 })} mt="sm">
        {data.brandName} · {data.productName}
      </Text>
      <Text sx={(theme) => ({ color: theme.colors.lightGrey, letterSpacing: 0.5 })} mt="sm">
        From $
        {
          data.variants?.reduce((prev, cur) => (prev.price > cur.price ? cur : prev), {
            price: 9999999,
          }).price
        }
      </Text>
      {/* <Text sx={(theme) => ({ color: '#aaa', letterSpacing: 0.5 })} mt="sm">
        20+ legs
      </Text> */}
    </Box>
  );
};

export default ProductItem;
