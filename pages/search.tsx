import React from 'react';
import { useRouter } from 'next/router';
import { Box, Center, Container, Grid, Text } from '@mantine/core';
import FilterList from '../components/Search/FilterList/FilterList';
import ProductItem from '../components/ProductItem';

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <Box sx={{ position: 'relative' }}>
      <Center mt="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })}>
            Showing 2 results for:
          </Text>
          <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="md">
            "{q}"
          </Text>
        </Box>
      </Center>
      <FilterList />
      <Container size="xl" py="lg">
        <Grid>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
          <Grid.Col xs={12} sm={6} md={4}>
            <ProductItem />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
