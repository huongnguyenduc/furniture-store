import { Box, Text } from '@mantine/core';
import { filterData } from './FilterData';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useMediaQuery } from '@mantine/hooks';

const FilterList = () => {
  const matches = useMediaQuery('(min-width: 1280px)', false);
  return (
    <Box py="sm" my="sm" sx={{ top: 70, zIndex: 3, position: 'sticky', backgroundColor: 'white' }}>
      <ScrollContainer
        style={{
          height: 56,
          display: 'flex',
        }}
      >
        {filterData.map((item, index) => {
          return (
            <Box
              p="md"
              sx={(theme) => ({
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: item.selected ? theme.colors.selectedBackground : theme.white,
                userSelect: 'none',
                cursor: 'pointer',
                minWidth: '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
                borderRadius: 10,
                border: `${item.selected ? 2 : 1}px solid ${
                  item.selected ? theme.colors.mediumBorder : theme.colors.lightBorder
                }`,
                marginLeft:
                  index == 0 && matches ? 'calc((100vw - 1280px) / 2)' : index == 0 ? 16 : 0,
                marginRight:
                  index == filterData.length - 1 && matches ? 'calc((100vw - 1280px) / 2)' : 16,
                '&:hover': {
                  backgroundColor: item.selected ? undefined : theme.colors.hoverBackground,
                  border: `2px solid ${
                    item.selected ? theme.colors.mediumBorder : theme.colors.lightBorder
                  }`,
                  boxShadow: item.selected
                    ? '0 0 2px 0.5px rgb(21 21 21 / 5%), 0 1px 5px 0 rgb(21 21 21 / 15%)'
                    : undefined,
                },
              })}
              key={item.label}
            >
              <Text sx={(theme) => ({ color: theme.colors.lightGrey })}>
                {item.label} ({item.quantity})
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
