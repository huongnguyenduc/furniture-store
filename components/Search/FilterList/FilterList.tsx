import { Box, Text } from '@mantine/core';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useMediaQuery } from '@mantine/hooks';
import Product from '../../../pages/product';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

interface CategoryData {
  categoryId: number;
  categoryName: string;
  categoryDesc: string;
  product: Product[];
}
interface CategoryListResponse {
  content: CategoryData[];
  error: string;
  status: number;
  timestamp: string;
}

const FilterList = ({
  selectedCategoryId,
  setSelectedCategoryId,
}: {
  selectedCategoryId: number[];
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const { data: session } = useSession();
  const { data, error } = useSWR<CategoryListResponse>(() => [
    `website/categories?onlyActive=true`,
    'GET',
    {},
    session?.accessToken,
  ]);
  const matches = useMediaQuery('(min-width: 1280px)', false);
  return (
    <Box py="sm" my="sm" sx={{ top: 70, zIndex: 3, position: 'sticky', backgroundColor: 'white' }}>
      <ScrollContainer
        style={{
          height: 56,
          display: 'flex',
        }}
      >
        {data?.content?.map((item, index) => {
          const isItemSelected = selectedCategoryId.some((id) => id === item.categoryId);
          return (
            <Box
              p="md"
              onClick={() => {
                isItemSelected
                  ? setSelectedCategoryId(selectedCategoryId.filter((id) => id !== item.categoryId))
                  : setSelectedCategoryId([...selectedCategoryId, item.categoryId]);
              }}
              sx={(theme) => ({
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: isItemSelected ? theme.colors.selectedBackground : theme.white,
                userSelect: 'none',
                cursor: 'pointer',
                minWidth: '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
                borderRadius: 10,
                border: `${isItemSelected ? 2 : 1}px solid ${
                  isItemSelected ? theme.colors.mediumBorder : theme.colors.lightBorder
                }`,
                marginLeft:
                  index == 0 && matches ? 'calc((100vw - 1280px) / 2)' : index == 0 ? 16 : 0,
                marginRight:
                  index == data.content.length - 1 && matches ? 'calc((100vw - 1280px) / 2)' : 16,
                '&:hover': {
                  backgroundColor: isItemSelected ? undefined : theme.colors.hoverBackground,
                  border: `2px solid ${
                    isItemSelected ? theme.colors.mediumBorder : theme.colors.lightBorder
                  }`,
                  boxShadow: isItemSelected
                    ? '0 0 2px 0.5px rgb(21 21 21 / 5%), 0 1px 5px 0 rgb(21 21 21 / 15%)'
                    : undefined,
                },
              })}
              key={'' + item.categoryId + item.categoryName}
            >
              <Text sx={(theme) => ({ color: theme.colors.lightGrey, textAlign: 'center' })}>
                {item.categoryName}
              </Text>
            </Box>
          );
        })}
      </ScrollContainer>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 12%, rgba(255,255,255,0) 88%, rgba(255,255,255,0.95) 100%)',
          zIndex: 3,
          top: 0,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default FilterList;
