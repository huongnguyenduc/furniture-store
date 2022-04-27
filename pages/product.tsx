import { Text, Box, Breadcrumbs, Container, Image, Accordion, Button, Group } from '@mantine/core';
import Link from 'next/link';
import { ChevronRight, ShoppingCart } from 'tabler-icons-react';
import { createStyles } from '@mantine/core';
import AccordionLabel from '../components/DetailProduct/AccordionLabel';
import { useMediaQuery } from '@mantine/hooks';

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
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingTop: '71px',
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

const Product = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 992px)', false);
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
              <Text sx={(theme) => ({ color: theme.colors.lightGrey })}>Sofa</Text>
            </Link>
          </Breadcrumbs>
        </Box>
      </Container>
      <Box className={`${classes.productContainer} ${classes.productContainerTop}`}>
        <Box className={classes.productRow}>
          <Box className={classes.productTitleMobile}>
            <Text size="xl">Alexander Accent Chair</Text>
            <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="lg">
              $1595
            </Text>
          </Box>
          <Box className={`${classes.productImage} ${classes.productCol}`}>
            <Image
              alt="image"
              src="https://content.cylindo.com/api/v2/4472/products/ALXR.LEATHR.CHAR.ACCENT/frames/1/ALXR.LEATHR.CHAR.ACCENT.JPG?background=FFFFFF&feature=COLOR:LTHR-02&feature=FINISH:LEG005-3"
            />
          </Box>
          <Box className={classes.productColCart}>
            <Box className={classes.productTitle} pt="xl" mt="xl">
              <Text size="xl">Alexander Accent Chair</Text>
              <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="lg">
                $1595
              </Text>
            </Box>
            <Accordion
              iconPosition="right"
              mt={32}
              sx={(theme) => ({
                backgroundColor: theme.white,
                border: `1px solid ${theme.colors.lightBorder}`,
              })}
            >
              <Accordion.Item label={<AccordionLabel index={1} title="Choose Fabric" />}>
                Colors, fonts, shadows and many other parts are customizable to fit your design
                needs
              </Accordion.Item>

              <Accordion.Item label={<AccordionLabel index={2} title="Choose Legs" />}>
                Configure components appearance and behavior with vast amount of settings or
                overwrite any part of component styles
              </Accordion.Item>

              <Accordion.Item label={<AccordionLabel index={3} title="Choose Quantity" />}>
                With new :focus-visible pseudo-class focus ring appears only when user navigates
                with keyboard
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
                <Group position="apart" align="center">
                  <Text size="xl" mt={8}>
                    $1595
                  </Text>
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
            <Accordion iconPosition="right" multiple>
              <Accordion.Item label="Product Description">
                A traditionally-inspired silhouette that automatically feels timeless. With a higher
                back and elevated arms, Alexander is a sofa that looks refined while feeling
                supremely comfortable. With subtle details like delicately pleated English rolled
                arms and elegant piping along its frame and seat and back cushions, Alexander
                marries classic design with a minimalist sensibility. Charming caster legs are
                higher in the front for a more cozy seating experience, inviting you to sit back and
                sink in.
              </Accordion.Item>
              <Accordion.Item label="Product Description">
                A traditionally-inspired silhouette that automatically feels timeless. With a higher
                back and elevated arms, Alexander is a sofa that looks refined while feeling
                supremely comfortable. With subtle details like delicately pleated English rolled
                arms and elegant piping along its frame and seat and back cushions, Alexander
                marries classic design with a minimalist sensibility. Charming caster legs are
                higher in the front for a more cozy seating experience, inviting you to sit back and
                sink in.
              </Accordion.Item>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Product;
