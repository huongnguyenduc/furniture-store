import { Box, Container, Group, Text, ActionIcon, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { categoryData, CategoryItem } from './CategoryData';
import ImageSlider from './ImageSlider';

const DifferenceSection = () => {
  const [category, setCategory] = React.useState<CategoryItem>(categoryData[0]);
  const matches = useMediaQuery('(max-width: 1070px)');
  const matchesSmall = useMediaQuery('(min-width: 430px)');
  return (
    <Box my="lg" sx={(theme) => ({ backgroundColor: theme.colors.lightGreen })}>
      <Container py={72} size="xl">
        <Box
          sx={
            matches
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }
          }
        >
          <MediaQuery smallerThan={1246} styles={{ width: '100%' }}>
            <Box
              style={
                matches
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : { marginRight: 16 }
              }
            >
              <Text
                size={matchesSmall ? 'lg' : 'md'}
                sx={(theme) => ({ color: theme.colors.lightGrey })}
                mb="xl"
              >
                THE ID DIFFERENCE
              </Text>
              <Text
                sx={(theme) => ({
                  color: theme.colors.lightGrey,
                  fontSize: matchesSmall ? 36 : 28,
                })}
              >
                custom made, not pre-made
              </Text>
            </Box>
          </MediaQuery>
          <MediaQuery smallerThan={1246} largerThan={1070} styles={{ order: 3 }}>
            <Box sx={matches ? { width: '100%' } : { width: 800 }}>
              <ImageSlider data={category} key={category.title} />
            </Box>
          </MediaQuery>
          <MediaQuery smallerThan={1246} largerThan={1070} styles={{ order: 2, marginTop: 60 }}>
            <Box
              sx={
                matches
                  ? {
                      display: 'flex',
                      marginTop: 60,
                      flexWrap: 'wrap',
                      gap: 24,
                    }
                  : { marginTop: '-300px' }
              }
            >
              {categoryData.map((item) => (
                <Group
                  spacing={matches ? 'sm' : 'xl'}
                  mb={matches ? 0 : 'md'}
                  key={item.title}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCategory(item);
                  }}
                >
                  <ActionIcon
                    sx={(theme) =>
                      category == item
                        ? { color: theme.white, backgroundColor: theme.colors.deepGreen }
                        : { color: theme.colors.deepGreen, backgroundColor: '#fff' }
                    }
                    size={48}
                    radius={12}
                    variant={category == item ? 'filled' : 'outline'}
                    style={{ transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                  >
                    <item.icon size={32} strokeWidth={1} />
                  </ActionIcon>
                  <Text
                    size={matches ? 'lg' : 'xl'}
                    sx={(theme) => ({ color: theme.colors.lightGrey })}
                  >
                    {item.title}
                  </Text>
                </Group>
              ))}
            </Box>
          </MediaQuery>
        </Box>
      </Container>
    </Box>
  );
};

export default DifferenceSection;
