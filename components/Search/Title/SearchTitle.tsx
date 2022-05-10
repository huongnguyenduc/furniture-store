import { Box, Center, Text } from '@mantine/core';

const SearchTitle = ({
  query,
  productCount,
}: {
  query: string | string[] | undefined;
  productCount: number;
}) => {
  return (
    <Center mt="xl">
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })}>
          Showing {productCount} results for:
        </Text>
        <Text size="xl" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="md">
          "{query}"
        </Text>
      </Box>
    </Center>
  );
};

export default SearchTitle;
