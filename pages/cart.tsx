import {
  Text,
  Box,
  Container,
  Accordion,
  Button,
  Group,
  TextInput,
  MediaQuery,
} from '@mantine/core';
import { createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CartItem from '../components/Cart/CartItem';
import { ArrowNarrowRight } from 'tabler-icons-react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { Variant } from './product';

const useStyles = createStyles((theme, _params) => ({
  titleContainer: {
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      // Type safe child reference in nested selectors via ref
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      display: 'block',
      margin: '0 auto',
      padding: 0,
      position: 'relative',
      zIndex: 1,
    },
  },
  title: {
    margin: 0,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      position: 'absolute',
      paddingBottom: '35px',
    },
    width: '100%',
    padding: '60px 0 20px 20px',
  },
  cartTitle: {
    textAlign: 'left',
  },
  cartRow: {
    position: 'relative',
    // Dynamic media queries, define breakpoints in theme, use anywhere
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // Type safe child reference in nested selectors via ref
      gridTemplateColumns: 'auto 380px',
      paddingRight: '50px',
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'grid',
      gridTemplateAreas: `"col1 col2" "col3 col2" "col4 col2"`,
      gridTemplateColumns: 'minmax(0, 1fr) 30%',
      gridTemplateRows: 'auto auto',
      paddingBottom: '100px',
    },
  },
  cartImage: {
    gridArea: 'col1',
    alignSelf: 'start',
    marginBottom: 'auto',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingTop: '71px',
    },
  },
  cartDetail: {
    gridArea: 'col3',
    alignSelf: 'start',
    marginBottom: 'auto',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingTop: '71px',
    },
  },
  cartCol: {
    padding: '0 20px',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      padding: 0,
      maxWidth: '840px',
      marginRight: '60px',
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // Type safe child reference in nested selectors via ref
      marginRight: 'auto',
      width: 'calc(100% - 100px)',
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      // Type safe child reference in nested selectors via ref
      marginLeft: '30px',
    },
  },
  cartColPrice: {
    padding: '20px 0 30px',
    margin: '0 0 50px',
    backgroundColor: '#FBF9F7',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      padding: '20px',
      borderRadius: '10px',
      margin: 0,
      position: 'sticky',
      bottom: '20px',
      transform: 'rotate(0.002deg)',
      gridArea: 'col2',
      alignSelf: 'end',
      minHeight: 'calc(100vh - 140px)',
      zIndex: 0,
      transition: 'z-index 0s linear 400ms',
      backgroundColor: '#FBF9F7',
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // Type safe child reference in nested selectors via ref

      width: '380px',
      margin: '0 0 0 auto',
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      // Type safe child reference in nested selectors via ref
      marginLeft: '30px',
    },
  },
  cartContainer: {
    position: 'relative',
    maxWidth: '1280px',
    margin: '0 auto',
    clear: 'both',
    padding: 0,
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      // padding: '0 20px',
    },
  },
  cartContainerTop: {
    padding: '1.8em 0 40px',
    // background: 'linear-gradient(to top, #F8F8F8 40px, transparent 40px)',
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // Type safe child reference in nested selectors via ref
      // background: 'linear-gradient(to left, rgba(243, 236, 229, 0.3) 510px, transparent 510px)',
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // padding: '0 20px',
      // background:
      // 'linear-gradient(to left, rgba(242, 236, 229, 0.3) calc((100% - 40px) * 0.33334 + 40px), transparent calc((100% - 40px) * 0.33334 + 40px))',
    },
  },
  cartList: {
    padding: '60px 0',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '0 20px',
    },
  },
}));

interface CartVariant extends Variant {
  brandName: string;
  categoryName: string;
  productName: string;
  productId: number;
}
export interface CartItem {
  variant: CartVariant;
  quantity: number;
}
interface Cart {
  orderId: number;
  voucher: string;
  totalPrice: number;
  orderDetails: CartItem[];
}

export interface CartResponse {
  content: Cart;
  errors: string;
  status: number;
  timestamp: string;
}

const ShoppingCart = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 992px)', false);
  const { data: session } = useSession();
  const { data, error, mutate } = useSWR<CartResponse>(() => [
    `orders/cart`,
    'GET',
    {},
    session?.accessToken,
  ]);
  return (
    <>
      <Container size={1280}>
        <Box className={classes.titleContainer}>
          <Box className={classes.title}>
            <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })}>
              Your Cart
            </Text>
          </Box>
        </Box>
      </Container>
      {!!!data?.content ? (
        <Box className={`${classes.cartContainer} ${classes.cartContainerTop}`}>
          <Box className={classes.cartRow}>
            <Box className={`${classes.cartImage} ${classes.cartCol}`}>
              <Box className={classes.cartList}>
                <Text mt={matches ? 'md' : 0}>You have no items in your shopping cart.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={`${classes.cartContainer} ${classes.cartContainerTop}`}>
          <Box className={classes.cartRow}>
            <Box className={`${classes.cartImage} ${classes.cartCol}`}>
              <Box className={classes.cartList}>
                {data?.content.orderDetails.map((item) => (
                  <CartItem data={item} update={mutate} />
                ))}
              </Box>
            </Box>
            <Box className={classes.cartColPrice}>
              <Box className={classes.cartTitle} mt="xl">
                <MediaQuery smallerThan="md" styles={{ marginLeft: '14px' }}>
                  <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })}>
                    Order Summary
                  </Text>
                </MediaQuery>
              </Box>
              <Box
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.lightBorder}`,
                  background: theme.white,
                })}
                mt={20}
              >
                <Group
                  position="apart"
                  p={15}
                  sx={(theme) => ({
                    borderBottom: `1px solid ${theme.colors.lightBorder}`,
                  })}
                >
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      letterSpacing: '0.023em',
                    })}
                  >
                    Subtotal
                  </Text>
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      letterSpacing: '0.023em',
                    })}
                  >
                    ${data?.content.totalPrice}
                  </Text>
                </Group>
                <Group
                  position="apart"
                  p={15}
                  sx={(theme) => ({
                    borderBottom: `1px solid ${theme.colors.lightBorder}`,
                  })}
                >
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      letterSpacing: '0.023em',
                    })}
                  >
                    Shipping & handling
                  </Text>
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      letterSpacing: '0.023em',
                    })}
                  >
                    $0
                  </Text>
                </Group>
                <Group
                  position="apart"
                  p={15}
                  sx={(theme) => ({
                    background: theme.colors.hoverBackground,
                  })}
                >
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      fontWeight: 600,
                      lineHeight: 1.6,
                      letterSpacing: '0.1em',
                    })}
                    size="lg"
                  >
                    TOTAL
                  </Text>
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      fontWeight: 600,
                      lineHeight: 1.6,
                      letterSpacing: '0.1em',
                    })}
                    size="lg"
                  >
                    ${data?.content.totalPrice}
                  </Text>
                </Group>
              </Box>
              <Accordion
                styles={(theme) => ({
                  content: { padding: 0 },
                  label: {
                    color: theme.colors.lightGrey,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    letterSpacing: '0.023em',
                  },
                })}
                sx={(theme) => ({ backgroundColor: theme.white })}
                mt={10}
              >
                <Accordion.Item label="Apply promotion code">
                  <Box sx={{ display: 'flex' }}>
                    <TextInput
                      placeholder="Enter code"
                      radius="xs"
                      size="md"
                      required
                      sx={{ flex: 2 }}
                      mr={10}
                    />
                    <Button
                      radius="xl"
                      size="md"
                      sx={(theme) => ({
                        flex: 1,
                        backgroundColor: theme.colors.brownBackground,
                        transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          backgroundColor: theme.colors.hoverBrown,
                        },
                      })}
                    >
                      Apply
                    </Button>
                  </Box>
                </Accordion.Item>
              </Accordion>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt="xl">
                <Button
                  sx={(theme) => ({
                    backgroundColor: theme.colors.lightGrey,
                    fontWeight: 400,
                    padding: matches ? 0 : '0 60px',
                  })}
                  radius="xl"
                  size="lg"
                  fullWidth={matches}
                >
                  <Group spacing={10}>
                    <Text size="lg" sx={(theme) => ({ fontWeight: 300, fontSize: '17px' })} mt={8}>
                      Checkout
                    </Text>
                    <ArrowNarrowRight size={28} strokeWidth={2} color="white" />
                  </Group>
                </Button>
              </Box>
            </Box>
            <Box className={`${classes.cartDetail} ${classes.cartCol}`}>
              {/* Under the product list */}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ShoppingCart;
