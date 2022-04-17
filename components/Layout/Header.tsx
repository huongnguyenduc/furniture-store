import { useState } from 'react';
import {
  Burger,
  Header,
  MediaQuery,
  Text,
  Container,
  Space,
  Group,
  SimpleGrid,
  Image,
  Box,
} from '@mantine/core';
import { Search, ShoppingCart, User } from 'tabler-icons-react';
import { categoryList, SubCategoryItemProps } from './CategoryList';

function CategoryHeader({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (shouldOpen: boolean) => void;
}) {
  const [subCategoryData, setSubCategoryData] = useState<SubCategoryItemProps[]>([]);
  const shouldShowSubItemCategory = (categoryData: SubCategoryItemProps[]) => {
    return categoryData.some((item) => item.items.length > 0);
  };
  return (
    <>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            top: 80,
            backgroundColor: 'white',
            zIndex: 100,
          }}
        >
          <Container size="xl">
            <SimpleGrid
              cols={subCategoryData.length}
              px={shouldShowSubItemCategory(subCategoryData) ? 0 : 500 / subCategoryData.length}
              pb={!subCategoryData.length ? 0 : 'xl'}
            >
              {subCategoryData.map((item) =>
                shouldShowSubItemCategory(subCategoryData) ? (
                  <div key={item.label}>
                    <Group
                      align="center"
                      direction="row"
                      mb="xl"
                      sx={{
                        transform: 'scaleX(1)',
                        '&:hover': { transform: 'scaleX(1.05)' },
                        transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                      }}
                    >
                      <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                        <Image src={item.image} alt={item.label} height={50} />
                      </MediaQuery>
                      <Text
                        sx={{
                          fontSize: 20,
                        }}
                      >
                        {item.label}
                      </Text>
                    </Group>
                    {item.items.map((item) => (
                      <Text
                        pb="lg"
                        sx={{
                          fontSize: 17,
                          '&:hover': {
                            transform: 'translateX(10px)',
                          },
                          transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                        }}
                        key={item}
                      >
                        {item}
                      </Text>
                    ))}
                  </div>
                ) : (
                  <Box
                    sx={{
                      transform: 'scale(0.9)',
                      '&:hover': { transform: 'scale(0.95)' },
                      transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                    }}
                  >
                    <Image src={item.image} alt={item.label} pb="lg" height={195} fit="contain" />
                    <Text
                      sx={{
                        fontSize: 20,
                      }}
                    >
                      {item.label}
                    </Text>
                  </Box>
                )
              )}
            </SimpleGrid>
          </Container>
        </div>
      </MediaQuery>
      <Header height={80} p="xl" onMouseEnter={() => setSubCategoryData([])}>
        <Container size="xl">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
              <Burger opened={opened} onClick={() => setOpened(!opened)} size="sm" mr="xl" />
            </MediaQuery>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery smallerThan="lg" styles={{ fontSize: 18, width: '120px' }}>
                <Text
                  sx={{ letterSpacing: '4px' }}
                  transform="uppercase"
                  size="xl"
                  weight={500}
                  align="center"
                  mr="xl"
                >
                  Furniture Shop
                </Text>
              </MediaQuery>
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Group>
                  {categoryList.map((item) => (
                    <Text
                      pr="md"
                      onMouseEnter={() => setSubCategoryData(item.items)}
                      sx={{ cursor: 'pointer' }}
                      key={item.label}
                    >
                      {item.label}
                    </Text>
                  ))}
                </Group>
              </MediaQuery>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Group position="right">
                  <Text pr="md">Free Swatches</Text>
                  <Text pr="md">Locations</Text>
                </Group>
              </MediaQuery>
              <Space w="md" />
              <Search size={20} strokeWidth={1.5} />
              <Space w="xl" />
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <User size={20} strokeWidth={1.5} />
              </MediaQuery>
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Space w="xl" />
              </MediaQuery>
              <ShoppingCart size={20} strokeWidth={1.5} />
            </div>
          </div>
        </Container>
      </Header>
      {!!subCategoryData.length && (
        <Box
          onMouseEnter={() => setSubCategoryData([])}
          style={{
            height: 'calc(100vh - 80px)',
            width: '100vw',
            position: 'fixed',
            backgroundColor: 'black',
            opacity: 0.55,
            top: 80,
            zIndex: 99,
          }}
        />
      )}
    </>
  );
}

export default CategoryHeader;
