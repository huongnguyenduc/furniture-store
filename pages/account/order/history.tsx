import { Box, Group, Text } from '@mantine/core';
import { useSession } from 'next-auth/react';
import React, { ReactElement } from 'react';
import useSWR from 'swr';
import AccountLayout from '../../../components/Layout/AccountLayout/AccountLayout';
import OrderItem from '../../../components/Order/OrderItem';
import { Cart } from '../../cart';

export interface OrderResponse {
  content: Cart[];
  errors: string;
  status: number;
  timestamp: string;
}

const OrderHistory = () => {
  const { data: session } = useSession();
  const { data, error } = useSWR<OrderResponse>(() => [
    `orders/user`,
    'GET',
    {},
    session?.accessToken,
  ]);
  return (
    <>
      {data?.content?.map((item) => (
        <Box
          sx={(theme) => ({
            marginBottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            border: `2px solid ${theme.colors.lightBorder}`,
            padding: '12px',
            borderRadius: '5px',
          })}
        >
          <Group position="apart" sx={{ width: '100%' }}>
            <Text>#{item.orderId}</Text>
            <Text
              sx={(theme) => ({
                color: theme.colors.brownBackground,
                letterSpacing: '0.1em',
                lineHeight: 1.1,
              })}
            >
              {item.orderStatus}
            </Text>
          </Group>
          {item.orderDetails.map((orderItem) => (
            <OrderItem data={orderItem} />
          ))}
          {item.voucher ? (
            <Text mb="xs">Voucher: ${(item.totalPrice * item.voucher.voucherValue) / 100}</Text>
          ) : (
            <></>
          )}
          <Group>
            <Text>Total price: </Text>
            <Text size="lg">
              $
              {item.totalPrice -
                (item.voucher ? (item.totalPrice * item.voucher.voucherValue) / 100 : 0)}
            </Text>
          </Group>
        </Box>
      ))}
    </>
  );
};

OrderHistory.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default OrderHistory;
