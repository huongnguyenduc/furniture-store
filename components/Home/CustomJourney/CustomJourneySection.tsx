import React from 'react';
import { Container, Text, Box, MediaQuery, Grid, Group, ActionIcon } from '@mantine/core';
import { CustomList } from './CustomData';

const CustomJourneySection = () => {
  return (
    <Container size="xl" mt="xl">
      <MediaQuery
        smallerThan="sm"
        styles={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MediaQuery smallerThan="sm" styles={{ width: 400, marginBottom: 16 }}>
            <Box sx={{ width: 220 }} mr="lg">
              <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey, lineHeight: 1.2 })}>
                Start your custom journey
              </Text>
            </Box>
          </MediaQuery>
          <Grid>
            {CustomList.map((item) => (
              <Grid.Col sm={6} lg={3} key={item.title}>
                <Group noWrap sx={{ cursor: 'pointer' }}>
                  <ActionIcon
                    sx={(theme) => ({ color: theme.colors.deepGreen })}
                    size={48}
                    radius={32}
                    variant="outline"
                  >
                    <item.icon size={32} strokeWidth={0.5} />
                  </ActionIcon>
                  <Box>
                    <Text
                      size="md"
                      weight={300}
                      mb={2}
                      sx={(theme) => ({ color: theme.colors.mediumGrey })}
                    >
                      {item.title}
                    </Text>
                    <Text weight={300} sx={(theme) => ({ color: theme.colors.lightGrey })}>
                      {item.description}
                    </Text>
                  </Box>
                </Group>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </MediaQuery>
    </Container>
  );
};

export default CustomJourneySection;
