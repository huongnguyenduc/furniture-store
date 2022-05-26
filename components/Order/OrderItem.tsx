import { Box, Grid, Group, Image, Text } from '@mantine/core';
import Router from 'next/router';
import React from 'react';
import { CartItem } from '../../pages/cart';

const OrderItem = ({ data }: { data: CartItem }) => {
  return (
    <Box
      sx={(theme) => ({ borderTop: `1px solid ${theme.colors.lightBorder}`, position: 'relative' })}
      pt={30}
      pb={30}
      px={10}
    >
      <Grid>
        <Grid.Col sm={5}>
          <Box
            sx={(theme) => ({ border: `1px solid ${theme.colors.lightBorder}`, cursor: 'pointer' })}
            onClick={() => {
              Router.push(`/product?id=${data.variant.productId}`);
            }}
          >
            <Image alt="image" src={data.variant.image} />
          </Box>
        </Grid.Col>
        <Grid.Col sm={1} />
        <Grid.Col sm={6}>
          <Box
            sx={(theme) => ({
              position: 'relative',
            })}
          >
            <Box sx={{ position: 'absolute', right: 0 }}>
              <Text
                sx={(theme) => ({ color: theme.colors.mixGrey, fontSize: 22, textAlign: 'right' })}
              >
                ${data.variant.price} x {data.quantity}
              </Text>
              <Text
                size="xl"
                mt={6}
                sx={(theme) => ({
                  color: theme.colors.lightGrey,
                  letterSpacing: '0.02em',
                  textAlign: 'right',
                })}
              >
                ${data.variant.price * data.quantity}
              </Text>
            </Box>
            <Text
              transform="uppercase"
              size="xl"
              weight={600}
              sx={(theme) => ({
                color: theme.colors.brownBackground,
                letterSpacing: '0.1em',
                lineHeight: 1.1,
                cursor: 'pointer',
              })}
              onClick={() => {
                Router.push(`/product?id=${data.variant.productId}`);
              }}
            >
              {data.variant.brandName}
            </Text>
            <Text sx={(theme) => ({ color: theme.colors.lightGrey, lineHeight: 1.35 })} size="lg">
              {data.variant.productName}
            </Text>
            {data.variant.options.map((item) => (
              <Box mt={10} key={item.optionValue + item.optionImage}>
                <Text sx={(theme) => ({ color: theme.colors.mediumGrey })}>{item.optionName}</Text>
                <Group mt={4}>
                  <Image width={20} height={20} src={item.optionImage} />
                  <Text sx={(theme) => ({ color: theme.colors.lightGrey })} mt={5}>
                    {item.optionValue}
                  </Text>
                </Group>
              </Box>
            ))}
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default OrderItem;
