import {
  Text,
  Box,
  Breadcrumbs,
  Container,
  Accordion,
  Button,
  Group,
  Skeleton,
  Anchor,
} from '@mantine/core';
import Link from 'next/link';
import { ChevronRight, ShoppingCart } from 'tabler-icons-react';
import { createStyles } from '@mantine/core';
import AccordionLabel from '../components/DetailProduct/AccordionLabel';
import { useMediaQuery } from '@mantine/hooks';
import Router, { useRouter } from 'next/router';
import useSWR, { unstable_serialize } from 'swr';
import ScrollContainer from 'react-indiana-drag-scroll';
import OptionItem from '../components/DetailProduct/OptionItem';
import React from 'react';
import RotateImage from '../components/DetailProduct/RotateImage';
import { useSession } from 'next-auth/react';
import * as _ from 'lodash';
import { axiosFetcher } from '../utils/fetcher';
import { showNotification } from '@mantine/notifications';
import { GetServerSideProps } from 'next';

const useStyles = createStyles((theme, _params) => ({
  breadcrumbsContainer: {
    display: 'none',
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      // Type safe child reference in nested selectors via ref
      maxWidth: '1380px',
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      display: 'block',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: 0,
      position: 'relative',
      zIndex: 1,
    },
  },
  breadcrumbs: {
    margin: 0,
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      position: 'absolute',
      paddingBottom: '35px',
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      // Type safe child reference in nested selectors via ref
      width: '100%',
      padding: '30px 0 0',
    },
  },
  productTitleMobile: {
    textAlign: 'left',
    padding: '0 20px',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      display: 'none',
    },
  },
  productTitle: {
    textAlign: 'left',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      display: 'none',
    },
  },
  productRow: {
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
  productImage: {
    gridArea: 'col1',
    alignSelf: 'start',
    marginBottom: 'auto',
    position: 'relative',
    // height: '196px',
    height: '250px',
    [`@media (min-width: 295px)`]: {
      // height: '270px',
      height: '300px',
      // paddingTop: '71px',
    },
    [`@media (min-width: 480px)`]: {
      // height: '320px',
      height: '390px',
      // paddingTop: '71px',
    },
    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      height: '460px',
      // paddingTop: '71px',
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      // height: '620px',
      height: '700px',
      // paddingTop: '71px',
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // height: '460px',
      height: '600px',
      // paddingTop: '71px',
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // Type safe child reference in nested selectors via ref
      // height: '590px',
      height: '730px',
    },
    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      // Type safe child reference in nested selectors via ref
      // height: '604px',
      height: '744px',
    },
  },
  productDetail: {
    gridArea: 'col3',
    alignSelf: 'start',
    marginBottom: 'auto',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingTop: '71px',
    },
  },
  productImageRotate: {
    position: 'absolute',
    width: '382px',
    height: '38px',
    // bottom: '32px',
    bottom: '172px',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // bottom: '72px',
      bottom: '212px',
    },
    backgroundSize: 'contain',
    left: '50%',
    transform: 'translateX(-50%)',
    userSelect: 'none',
    pointerEvents: 'none',
    display: 'block',
    textAlign: 'center',
    '&:before': {
      position: 'absolute',
      content: '"360\u00b0"',
      width: 'auto',
      height: 'auto',
      margin: 0,
      color: theme.colors.lightGrey,
      padding: 0,
      // left: '50%',
      transform: 'translate(-50%, 100%)',
      // transform: 'translateX(-50%)',
    },
  },
  productImagePreview: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    height: '60px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%',
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      height: '140px',
      width: '580px',
      left: '50%',
      marginLeft: '-290px',
      border: `1px solid ${theme.colors.lightBorder}`,
      borderRadius: '5px',
      padding: '20px 0 0',
    },
  },
  productImagePreviewItem: {
    width: 'calc(20% - 7px)',
    borderRadius: '4px',
    borderColor: theme.colors.brownBackground,
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid rgba(21, 21, 21, 0.03)',
    transition: 'border-color 400ms cubic-bezier(0.4, 0, 0)',
    padding: 0,
    maxWidth: '60px',
    height: 'auto',
    lineHeight: 1,
    margin: 0,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      margin: '0 5px',
      width: '100px',
      height: '100px',
      lineHeight: '100px',
    },
  },
  productImagePreviewItemImg: {
    width: 'auto',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      left: 0,
      right: 0,
      transform: 'translate(0, -50%)',
    },
  },
  productCol: {
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
  productColCart: {
    padding: '0 0 30px',
    margin: '0 0 50px',
    backgroundColor: '#FBF9F7',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      padding: 0,
      margin: 0,
      position: 'sticky',
      bottom: '20px',
      transform: 'rotate(0.002deg)',
      gridArea: 'col2',
      alignSelf: 'end',
      minHeight: 'calc(100vh - 140px)',
      zIndex: 0,
      transition: 'z-index 0s linear 400ms',
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
  productContainer: {
    position: 'relative',
    maxWidth: '1440px',
    margin: '0 auto',
    clear: 'both',
    padding: 0,
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      padding: '0 20px',
    },
  },
  productContainerTop: {
    padding: '2.9em 0 40px',
    background: 'linear-gradient(to top, #F8F8F8 40px, transparent 40px)',
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      // Type safe child reference in nested selectors via ref
      background: 'linear-gradient(to left, rgba(243, 236, 229, 0.3) 510px, transparent 510px)',
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      padding: '0 20px',
      background:
        'linear-gradient(to left, rgba(242, 236, 229, 0.3) calc((100% - 40px) * 0.33334 + 40px), transparent calc((100% - 40px) * 0.33334 + 40px))',
    },
  },
}));

export interface Option {
  optionId: number;
  optionName: string;
  optionValue: string;
  optionImage: string;
}
export interface Variant {
  price: number;
  sku: string;
  image: string;
  options: Option[];
  variantId: number;
  quantity: number;
}
interface Product {
  brandId: number;
  brandName: string;
  categoryId: number;
  categoryName: string;
  image: string;
  productDesc: string;
  productId: number;
  productName: string;
  variants: Variant[];
}

interface ProductResponse {
  content: Product;
  error: string;
  status: number;
  timestamp: string;
}

interface VariantResponse {
  content: Variant;
  errors: string;
  status: number;
  timestamp: string;
}

interface OptionResponse {
  content: Option[];
  error: string;
  status: number;
  timestamp: string;
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  if (params && params.id) {
    const product = await axiosFetcher(`website/products/${params.id}`);
    return {
      props: {
        fallback: {
          [unstable_serialize([`website/products/${params.id}`])]: product,
        }
      }
    }
  }
    return {
      props: {
        
      }
    }
}

const Product = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 992px)', false);
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const { data, error } = useSWR<ProductResponse>(() => [`website/products/${id}`], axiosFetcher, {
    onSuccess: (data) => {
      setSelectedOptions(data.content.variants[0].options);
    },
  });
  const selectedOptionUrl =
    selectedOptions.length === 0
      ? ''
      : selectedOptions.map((option) => `&optionValues=${option.optionValue}`).join('');
  const { data: selectedVariant, error: variantError } = useSWR<VariantResponse>(
    selectedOptionUrl ? () => [`website/variants/search?productId=${id}${selectedOptionUrl}`] : null
  );
  const { data: optionData, error: optionError } = useSWR<OptionResponse>(() => [
    `website/products/${id}/option`,
  ]);

  const isLoadingInitialData = !data && !error;

  const isLoadingVariant = !variantError && !selectedVariant;

  const addCart = async () => {
    if (!!!session?.accessToken) {
      showNotification({
        title: 'Need login!',
        message: (
          <Text>
            <Anchor
              sx={(theme) => ({
                color: '#4F8DC1',
                transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: '#6FB3F2',
                },
              })}
              component="a"
              onClick={() => Router.push(`/login?referrer=product&id=${data?.content.productId}`)}
            >
              Login now
            </Anchor>{' '}
            to continue your shopping!
          </Text>
        ),
        color: 'yellow',
      });
    } else if (selectedVariant?.content.quantity === 0) {
      showNotification({
        title: 'Out of stock!',
        message: <Text>You can choose another variants instead.</Text>,
        color: 'yellow',
      });
    } else {
      const addCartResponse = await axiosFetcher(
        'orders/add-item',
        'POST',
        {
          variantId: selectedVariant?.content.variantId,
          quantity: 1,
        },
        session?.accessToken
      );
      if (addCartResponse.status === 200) {
        showNotification({
          title: 'Success',
          message: 'Add product into cart successfully!',
          color: 'blue',
        });
        Router.push('/cart');
      } else if (addCartResponse.status === 403) {
        showNotification({
          title: 'Failure',
          message: (
            <Text>
              {addCartResponse.message}. Maybe you need{' '}
              <Anchor
                sx={(theme) => ({
                  color: '#4F8DC1',
                  transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: '#6FB3F2',
                  },
                })}
                component="a"
                onClick={() => Router.push(`/login?referrer=product&id=${data?.content.productId}`)}
              >
                re-login
              </Anchor>{' '}
              to continue your shopping!
            </Text>
          ),
          color: 'red',
        });
      } else {
        showNotification({
          title: 'Failure',
          message: <Text>{addCartResponse.message}</Text>,
          color: 'red',
        });
      }
    }
  };

  return (
    <>
      <Container size="xl">
        <Box className={classes.breadcrumbsContainer}>
          <Breadcrumbs
            separator={<ChevronRight size={16} strokeWidth={1} />}
            className={classes.breadcrumbs}
          >
            <Link href="/" passHref>
              <Text component="a" sx={(theme) => ({ color: theme.colors.lightGrey })}>
                Home
              </Text>
            </Link>
            <Link href="#" passHref>
              {isLoadingInitialData ? (
                <Skeleton height={16} width={100} />
              ) : (
                <Text sx={(theme) => ({ color: theme.colors.lightGrey })}>
                  {data?.content.categoryName}
                </Text>
              )}
            </Link>
          </Breadcrumbs>
        </Box>
      </Container>
      <Box className={`${classes.productContainer} ${classes.productContainerTop}`}>
        <Box className={classes.productRow}>
          <Box className={classes.productTitleMobile}>
            <Text size="xl">{data?.content.productName}</Text>
            <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="lg">
              ${selectedVariant?.content.price}
            </Text>
          </Box>
          <Box className={`${classes.productImage} ${classes.productCol}`} draggable={false}>
            <RotateImage
              image={selectedVariant?.content.image}
              variants={data?.content.variants}
              selectedVariant={selectedVariant?.content}
              setSelectedOptions={setSelectedOptions}
              errors={selectedVariant?.errors}
            />
          </Box>
          <Box className={classes.productColCart}>
            <Box className={classes.productTitle} pt="xl" mt="xl">
              {isLoadingInitialData ? (
                <Skeleton height={18} />
              ) : (
                <Text size="xl">{data?.content.productName}</Text>
              )}
              {isLoadingInitialData || isLoadingVariant ? (
                <Skeleton height={18} width={60} mt="lg" />
              ) : (
                <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="lg">
                  ${selectedVariant?.content.price}
                </Text>
              )}
            </Box>
            <Accordion
              iconPosition="right"
              mt={32}
              sx={(theme) => ({
                backgroundColor: theme.white,
                border: `1px solid ${theme.colors.lightBorder}`,
              })}
            >
              {Object.entries(_.groupBy(optionData?.content, 'optionName')).map(
                (optionType, index) => {
                  const optionTypeName = optionType[0];
                  const optionList = optionType[1];
                  return (
                    <Accordion.Item
                      label={
                        <AccordionLabel index={index + 1} title={`Choose ${optionTypeName}`} />
                      }
                      key={'' + optionTypeName + index}
                    >
                      <ScrollContainer
                        style={{
                          height: 107,
                          display: 'flex',
                        }}
                      >
                        {optionList.map((item) => (
                          <Box
                            onClick={() => {
                              setSelectedOptions((oldOptions) =>
                                oldOptions.map((option) =>
                                  option.optionId === item.optionId ? item : option
                                )
                              );
                            }}
                            key={item.optionValue}
                          >
                            <OptionItem
                              data={item}
                              selected={
                                selectedOptions.find(
                                  (selectedItem) => selectedItem.optionValue === item.optionValue
                                ) !== undefined
                              }
                            />
                          </Box>
                        ))}
                      </ScrollContainer>
                    </Accordion.Item>
                  );
                }
              )}
            </Accordion>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt="xl">
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.colors.lightGrey,
                  fontWeight: 400,
                  padding: matches ? 0 : '0 30px',
                })}
                radius="xl"
                size="lg"
                fullWidth={matches}
                onClick={addCart}
              >
                <Group position="apart" align="center">
                  {isLoadingInitialData || isLoadingVariant ? (
                    <Skeleton height={20} width={60} />
                  ) : (
                    <Text size="xl" mt={8}>
                      ${selectedVariant?.content.price}
                    </Text>
                  )}

                  <Box
                    sx={{
                      width: '1px',
                      height: '24px',
                      backgroundColor: 'white',
                      margin: '0 20px',
                    }}
                  />
                  <Group>
                    <ShoppingCart />
                    <Text size="lg" sx={(theme) => ({ fontWeight: 300 })} mt={8}>
                      Add to cart
                    </Text>
                  </Group>
                </Group>
              </Button>
              <Text mt="lg" sx={(theme) => ({ color: theme.colors.lightGrey })}>
                Delivered in 22–25 weeks
              </Text>
            </Box>
          </Box>
          <Box className={`${classes.productDetail} ${classes.productCol}`}>
            <Accordion iconPosition="right">
              <Accordion.Item label="Product Description" opened>
                <Text>{data?.content.productDesc}</Text>
              </Accordion.Item>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
