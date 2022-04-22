import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Grid } from '@mantine/core';
import FilterList from '../components/Search/FilterList/FilterList';
import ProductItem from '../components/ProductItem';
import SearchTitle from '../components/Search/Title/SearchTitle';
import Router from 'next/router';

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <Box sx={{ position: 'relative' }}>
      <SearchTitle query={q} />
      <FilterList />
      <Container size="xl" py="lg">
        <Grid>
          <Grid.Col
            xs={12}
            sm={6}
            md={4}
            onClick={() => {
              Router.push('/product');
            }}
          >
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
