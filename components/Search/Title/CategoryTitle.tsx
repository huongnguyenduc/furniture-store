import { Box, Center, Text } from '@mantine/core';

const CategoryTitle = ({
  category,
  categoryDesc,
}: {
  category: string | undefined;
  categoryDesc: string | undefined;
}) => {
  return (
    <Center mt={64}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Text sx={(theme) => ({ color: theme.colors.lightGrey, fontSize: 64 })}>{category}</Text>
        <Text size="md" sx={(theme) => ({ color: theme.colors.lightGrey })} mt="xl">
          {categoryDesc}
        </Text>
      </Box>
    </Center>
  );
};

export default CategoryTitle;
