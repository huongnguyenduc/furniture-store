import { Box, Container, Text, Image, Group } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import ScrollContainer from 'react-indiana-drag-scroll';
import React from 'react';
import { ArrowNarrowRight } from 'tabler-icons-react';
import { CollectionPage } from './CollectionData';

const SeatingCollection = ({ data }: { data: CollectionPage }) => {
  const matches = useMediaQuery('(min-width: 1280px)');
  return (
    <Box pt="xl" mt="xl">
      <Container size="xl">
        <Text sx={(theme) => ({ color: theme.colors.lightGrey, fontSize: 36 })}>{data.title}</Text>
      </Container>
      <Box py="lg" my="lg" sx={{ position: 'relative' }}>
        <ScrollContainer
          style={{
            height: 390,
            display: 'flex',
          }}
        >
          {data.items.map((item, index) => {
            const { hovered, ref } = useHover();
            return (
              <Box
                sx={{
                  userSelect: 'none',
                  cursor: 'pointer',
                  minWidth: '410px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 10,
                  marginLeft:
                    index == 0 && matches ? 'calc((100vw - 1280px) / 2)' : index == 0 ? 16 : 0,
                  marginRight:
                    index == data.items.length - 1 && matches ? 'calc((100vw - 1280px) / 2)' : 16,
                }}
                key={item.title}
                ref={ref}
              >
                <Image src={item.image} height={280} alt={item.title} mb="md" />
                <Group spacing={6} align="center" mb="md">
                  <Text
                    size="xl"
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      transform: 'translateY(3px)',
                    })}
                  >
                    {item.title}
                  </Text>
                  <ArrowNarrowRight
                    size={24}
                    strokeWidth={1.5}
                    color={'black'}
                    style={{
                      transform: hovered ? 'translateX(6px)' : '',
                      transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </Group>
                <Text
                  size="lg"
                  sx={(theme) => ({
                    color: theme.colors.lightGrey,
                    opacity: 0.8,
                    letterSpacing: 0.25,
                  })}
                >
                  {item.description}
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
              'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 95%, rgba(255,255,255,0.95) 100%)',
            zIndex: 3,
            top: 0,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default SeatingCollection;
