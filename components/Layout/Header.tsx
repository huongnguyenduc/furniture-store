import { useState } from 'react';
import { useSpotlight } from '@mantine/spotlight';
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
  ActionIcon,
} from '@mantine/core';
import { Search, ShoppingCart, User } from 'tabler-icons-react';
import { categoryList, SubCategoryItemProps } from './CategoryList';
import Router from 'next/router';

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
  const spotlight = useSpotlight();
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
                  <div key={item.label + item.categoryId}>
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
                      onClick={() => {
                        if (item.categoryId) {
                          const subCategoriesUrl =
                            typeof item.items[0] === 'string'
                              ? ''
                              : item.items
                                  .map((subItem) =>
                                    typeof subItem === 'string'
                                      ? ''
                                      : `&subCategories=${subItem.categoryId}`
                                  )
                                  .join('');
                          Router.push(
                            `/search?q=${''}&category=${item.categoryId}${subCategoriesUrl}`
                          );
                        }
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
                    {item.items.map((subItem) => (
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
                        key={`${subItem.toString()}-header`}
                        onClick={() => {
                          if (typeof subItem !== 'string') {
                            Router.push(
                              `/search?q=${''}&category=${item.categoryId}&subCategories=${
                                subItem.categoryId
                              }`
                            );
                          }
                        }}
                      >
                        {typeof subItem === 'string' ? subItem : subItem.label}
                      </Text>
                    ))}
                  </div>
                ) : (
                  <Box
                    key={item.label + item.image + item.image}
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
                <MediaQuery smallerThan="md" styles={{ marginLeft: '15%' }}>
                  <Text
                    sx={{ letterSpacing: '4px', cursor: 'pointer' }}
                    transform="uppercase"
                    size="xl"
                    weight={500}
                    align="center"
                    mr="xl"
                    onClick={() => {
                      Router.push('/');
                    }}
                  >
                    Furniture Shop
                  </Text>
                </MediaQuery>
              </MediaQuery>
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Group>
                  {categoryList.map((item) => (
                    <Text
                      pr="md"
                      onMouseEnter={() => setSubCategoryData(item.items)}
                      sx={{ cursor: 'pointer' }}
                      key={item.label + item.image}
                    >
                      {item.label}
                    </Text>
                  ))}
                </Group>
              </MediaQuery>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Space w="md" />
              <ActionIcon
                size={32}
                variant="hover"
                radius={20}
                onClick={spotlight.openSpotlight}
                sx={{ outline: 'none' }}
              >
                <Search size={20} strokeWidth={1.5} />
              </ActionIcon>
              <Space w="xl" />
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <ActionIcon
                  size={32}
                  variant="hover"
                  radius={20}
                  onClick={() => {
                    Router.push('/account/edit');
                  }}
                >
                  <User size={20} strokeWidth={1.5} />
                </ActionIcon>
              </MediaQuery>
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Space w="xl" />
              </MediaQuery>
              <ActionIcon
                size={32}
                variant="hover"
                radius={20}
                onClick={() => {
                  Router.push('/cart');
                }}
              >
                <ShoppingCart size={20} strokeWidth={1.5} />
              </ActionIcon>
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
