import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Container, Grid } from '@mantine/core';
import FilterList from '../components/Search/FilterList/FilterList';
import ProductItem from '../components/ProductItem';
import SearchTitle from '../components/Search/Title/SearchTitle';

import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { fetcher } from '../utils/fetcher';
import { useSession } from 'next-auth/react';

const PAGE_SIZE = 6;

interface SearchPage {
  content: {
    content: [];
    totalElements: number;
  };
  length: number;
}

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  const { data: session } = useSession();
  const { data, error, size, setSize } = useSWRInfinite<SearchPage>((index) => [
    `products/search?name=${q}&page=${index}&size=${PAGE_SIZE}`,
    'GET',
    {},
    session?.accessToken,
  ]);

  const products = data ? [].concat(...data.map((page) => page.content?.content)) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[0].content.totalElements === products.length);

  return (
    <Box sx={{ position: 'relative' }}>
      <SearchTitle productCount={data ? data[0].content.totalElements : 0} query={q} />
      <FilterList />
      <Container size="xl" py="lg">
        <Grid>
          {isLoadingInitialData
            ? 'Loading'
            : products.map((item) => (
                <Grid.Col xs={12} sm={6} md={4}>
                  <ProductItem data={item} />
                </Grid.Col>
              ))}
        </Grid>
        <Button onClick={() => setSize(size + 1)} loading={isLoadingMore} disabled={isReachingEnd}>
          {isReachingEnd ? 'no more product' : 'load more'}
        </Button>
      </Container>
    </Box>
  );
};

export default Search;
