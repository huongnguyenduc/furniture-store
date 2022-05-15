import { Box, Image, Text } from '@mantine/core';
import React from 'react';
import { Option } from '../../pages/product';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params) => ({
  optionItem: {
    userSelect: 'none',
    cursor: 'pointer',
    minWidth: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  productImage: {
    border: '4px solid transparent',
    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    '&:hover': {
      borderColor: '#AAA',
    },
  },
  productImageSelected: {
    border: `4px solid ${theme.colors.brownBackground}`,
    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
  },
}));

const OptionItem = ({ data, selected }: { data: Option; selected: boolean }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.optionItem} key={data.optionValue}>
      <Box className={selected ? classes.productImageSelected : classes.productImage} mb="sm">
        <Image src={data.optionImage} height={75} alt={data.optionValue} />
      </Box>
      <Text>{data.optionValue}</Text>
    </Box>
  );
};

export default OptionItem;
