import { Box, Text, Image } from '@mantine/core';
import { categoryData } from './CategoryData';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useHover, useMediaQuery } from '@mantine/hooks';
import Router from 'next/router';

const CategoryList = () => {
  const matches = useMediaQuery('(min-width: 1280px)', false);
  return (
    <Box py="lg" my="lg" sx={{ position: 'relative' }}>
      <ScrollContainer
        style={{
          height: 176,
          display: 'flex',
        }}
      >
        {categoryData.map((item, index) => {
          const { hovered, ref } = useHover();
          return (
            <Box
              p="md"
              sx={(theme) => ({
                backgroundColor: theme.colors.softGrey,
                userSelect: 'none',
                cursor: 'pointer',
                minWidth: '150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 10,
                marginLeft:
                  index == 0 && matches ? 'calc((100vw - 1280px) / 2)' : index == 0 ? 16 : 0,
                marginRight:
                  index == categoryData.length - 1 && matches ? 'calc((100vw - 1280px) / 2)' : 16,
              })}
              key={item.label + item.image}
              ref={ref}
              onClick={() => {
                if (item.categoryId) {
                  const subCategoriesUrl = item.items
                    ? item.items.map((subItem) => `&subCategories=${subItem}`).join('')
                    : '';
                  Router.push(`/search?q=${''}&category=${item.categoryId}${subCategoriesUrl}`);
                }
              }}
            >
              <Box
                p="lg"
                sx={{
                  transform: hovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Image src={item.image} height={60} alt={item.label} mb="md" />
              </Box>
              <Text>{item.label}</Text>
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
            'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 95%, rgba(255,255,255,0.95) 100%)',
          zIndex: 3,
          top: 0,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default CategoryList;
