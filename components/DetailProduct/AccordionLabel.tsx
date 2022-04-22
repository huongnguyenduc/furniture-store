import { Box, Group, Text } from '@mantine/core';
import React from 'react';

const AccordionLabel = ({ index, title }: { index: number; title: string }) => {
  return (
    <Group spacing={12} sx={{ alignItems: 'center' }}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.brownBackground,
          color: theme.white,
          padding: '10px 12px 5px',
          borderRadius: '8px',
          fontWeight: 600,
          textAlign: 'center',
        })}
      >
        {index}
      </Box>
      <Text
        sx={(theme) => ({
          color: theme.colors.lightGrey,
          fontWeight: 400,
          textAlign: 'center',
        })}
        mt={4}
      >
        {title}
      </Text>
    </Group>
  );
};

export default AccordionLabel;
