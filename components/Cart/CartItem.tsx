import { Box, Grid, Group, Image, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import React from 'react';
import { KeyedMutator } from 'swr/dist/types';
import { CartItem, CartResponse } from '../../pages/cart';
import { axiosFetcher } from '../../utils/fetcher';

const CartItem = ({ data, update }: { data: CartItem; update: KeyedMutator<CartResponse> }) => {
  const { data: session } = useSession();
  const addItemQuantity = async () => {
    if (data.variant.quantity === data.quantity) {
      showNotification({
        title: 'Maximum quantity!',
        message: <Text>This product gets the highest quantity</Text>,
        color: 'yellow',
      });
    } else {
      const addItemResponse = await axiosFetcher(
        'orders/add-item',
        'POST',
        {
          variantId: data.variant.variantId,
          quantity: 1 + data.quantity,
        },
        session?.accessToken
      );
      if (addItemResponse.status === 200) {
        update(addItemResponse);
      } else {
        showNotification({
          title: 'Failure',
          message: <Text>{addItemResponse.message}</Text>,
          color: 'red',
        });
      }
    }
  };

  const minusItemQuantity = async () => {
    if (data.quantity > 1) {
      const minusItemResponse = await axiosFetcher(
        'orders/add-item',
        'POST',
        {
          variantId: data.variant.variantId,
          quantity: data.quantity - 1,
        },
        session?.accessToken
      );

      if (minusItemResponse.status === 200) {
        update(minusItemResponse);
      } else {
        showNotification({
          title: 'Failure',
          message: <Text>{minusItemResponse.message}</Text>,
          color: 'red',
        });
      }
    }
  };

  const removeItemQuantity = async () => {
    const removeItemResponse = await axiosFetcher(
      'orders/remove-item',
      'POST',
      data.variant.variantId,
      session?.accessToken
    );
    if (removeItemResponse.status === 200) {
      update(removeItemResponse);
    } else {
      showNotification({
        title: 'Failure',
        message: <Text>{removeItemResponse.message}</Text>,
        color: 'red',
      });
    }
  };
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
            <Box mt={20}>
              <Text
                sx={(theme) => ({
                  borderTop: `1px solid ${theme.colors.lightBorder}`,
                  borderBottom: `1px solid ${theme.colors.lightBorder}`,
                  padding: '15px 0',
                  color: theme.colors.lightGrey,
                })}
              >
                Delivered in 22–25 weeks
              </Text>
            </Box>
            <Group position="apart" mt="md" sx={{ position: 'relative' }}>
              <Box
                onClick={removeItemQuantity}
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.deepBorder}`,
                  color: theme.colors.lightGrey,
                  width: 0,
                  display: 'flex',
                  overflow: 'hidden',
                  padding: '15px 0 10px 40px',
                  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  '&:before': {
                    content: '""',
                    width: '2px',
                    height: '12px',
                    background: theme.colors.deepBorder,
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%) rotate(45deg)',
                  },
                  '&:after': {
                    content: '""',
                    width: '2px',
                    height: '12px',
                    background: '#767676',
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%) rotate(-45deg)',
                  },
                  '&:hover': {
                    width: '100px',
                  },
                })}
              >
                Remove
              </Box>
              <Group>
                <Box
                  onClick={minusItemQuantity}
                  sx={(theme) => ({
                    border: `1px solid ${theme.colors.deepBorder}`,
                    color: theme.colors.lightGrey,
                    width: '44px',
                    height: '44px',
                    padding: '15px 0 10px 40px',
                    transition: 'background .3s ease-in-out',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:after': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      background: theme.colors.lightGrey,
                      '&:after': { background: theme.white },
                      '&:before': { background: theme.white },
                    },
                  })}
                />
                <Text>{data.quantity}</Text>
                <Box
                  onClick={addItemQuantity}
                  sx={(theme) => ({
                    border: `1px solid ${theme.colors.deepBorder}`,
                    color: theme.colors.lightGrey,
                    width: '44px',
                    height: '44px',
                    padding: '15px 0 10px 40px',
                    transition: 'background .3s ease-in-out',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:after': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotate(-90deg)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      background: theme.colors.lightGrey,
                      '&:after': { background: theme.white },
                      '&:before': { background: theme.white },
                    },
                  })}
                />
              </Group>
            </Group>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default CartItem;
