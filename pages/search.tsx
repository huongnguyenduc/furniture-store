import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Loader } from '@mantine/core';
import FilterList from '../components/Search/FilterList/FilterList';
import ProductItem from '../components/ProductItem';
import SearchTitle from '../components/Search/Title/SearchTitle';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import SortList from '../components/Search/SortList/SortList';
import CategoryTitle from '../components/Search/Title/CategoryTitle';

const PAGE_SIZE = 6;

interface SearchPage {
  content: {
    content: [];
    totalElements: number;
  };
  length: number;
}

export enum SortValue {
  ProductId = 'productId',
  ProductName = 'productName',
  Category = 'category',
  Brand = 'brand',
}

export enum SortDirection {
  Up = 'ASC',
  Down = 'DESC',
}

interface Category {
  categoryId: number;
  categoryName: string;
  categoryDesc: string;
}
interface CategoryResponse {
  content: Category;
  error: string;
  status: number;
  timestamp: string;
}

const Search = () => {
  const router = useRouter();
  const { q, subCategories, category, selectedCategory } = router.query;
  const { data: categoryData } = useSWR<CategoryResponse>(() => [
    `website/categories/${category}`,
    'GET',
    {},
  ]);
  const [sortValue, setSortValue] = React.useState<SortValue>(SortValue.ProductId);
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(SortDirection.Up);
  const [brandIdList, setBrandIdList] = React.useState<number[]>([]);
  const brandListUrl =
    brandIdList.length === 0 ? '' : brandIdList.map((id) => `&brandId=${id}`).join('');
  const [categoryIdList, setCategoryIdList] = React.useState<number[]>(
    subCategories
      ? Array.isArray(subCategories)
        ? subCategories.map((id) => parseInt(id))
        : [parseInt(subCategories)]
      : []
  );
  const [subCategoryIdList, setSubCategoryIdList] = React.useState<number[]>(
    subCategories
      ? Array.isArray(subCategories)
        ? subCategories.map((id) => parseInt(id))
        : [parseInt(subCategories)]
      : []
  );
  React.useEffect(() => {
    if (selectedCategory) {
      setCategoryIdList([parseInt(selectedCategory.toString())]);
    } else {
      setCategoryIdList(
        subCategories
          ? Array.isArray(subCategories)
            ? subCategories.map((id) => parseInt(id))
            : [parseInt(subCategories)]
          : []
      );
    }
    setSubCategoryIdList(
      subCategories
        ? Array.isArray(subCategories)
          ? subCategories.map((id) => parseInt(id))
          : [parseInt(subCategories)]
        : []
    );
  }, [subCategories, selectedCategory]);
  const categoryListUrl =
    categoryIdList.length === 0 ? '' : categoryIdList.map((id) => `&categoryId=${id}`).join('');
  const { data, error, size, setSize } = useSWRInfinite<SearchPage>((index) => [
    `website/products/search?productName=${q}&pageNumber=${index}&pageSize=${PAGE_SIZE}&sortBy=${sortValue}&sortDirection=${sortDirection}${categoryListUrl}${brandListUrl}`,
  ]);

  const products = data ? [].concat(...data.map((page) => page?.content?.content)) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const hasMore = isEmpty || (data && data[0].content.totalElements === products.length);

  React.useEffect(() => {
    window.addEventListener('scroll', reachEndCallback, false);
    return () => {
      window.removeEventListener('scroll', reachEndCallback, false);
    };
  }, [hasMore]);
  function reachEnd() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !hasMore) {
      setSize((size) => size + 1);
    }
  }
  const reachEndCallback = React.useCallback(() => {
    reachEnd();
  }, [hasMore]);
  return (
    <Box sx={{ position: 'relative' }}>
      {category ? (
        <CategoryTitle
          category={categoryData?.content.categoryName}
          categoryDesc={categoryData?.content.categoryDesc}
        />
      ) : (
        <SearchTitle productCount={data ? data[0].content.totalElements : 0} query={q} />
      )}
      <FilterList
        selectedCategoryId={categoryIdList}
        setSelectedCategoryId={setCategoryIdList}
        categoryIdList={subCategoryIdList}
      />
      <SortList
        selectedBrandId={brandIdList}
        setSelectedBrandId={setBrandIdList}
        setSortValue={setSortValue}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      />
      <Container size="xl" py="lg">
        <Grid>
          {isLoadingInitialData
            ? ''
            : products.map((item) => (
                <Grid.Col xs={12} sm={6} md={4}>
                  <ProductItem data={item} />
                </Grid.Col>
              ))}
        </Grid>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {isLoadingMore ? <Loader color="gray" /> : <></>}
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
