import React from 'react';
import { Group, Slider, Text } from '@mantine/core';
import { CategoryItem } from './CategoryData';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

const ImageSlider = ({ data }: { data: CategoryItem }) => {
  const matches = useMediaQuery('(max-width: 1070px)', false);
  const { width } = useViewportSize();
  return (
    <>
      <Slider
        defaultValue={50}
        labelTransition="fade"
        label={null}
        styles={(theme) => ({
          bar: {
            backgroundImage: `url(${data.leftImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          },
          track: {
            '&:before': {
              backgroundImage: `url(${data.rightImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
            height: matches ? (290 * width) / 610 : 390,
          },
          root: {
            height: matches ? (290 * width) / 610 : 390,
          },
          thumb: {
            height: matches ? (290 * width) / 610 : 390,
            width: 3,
            backgroundColor: theme.white,
          },
        })}
        style={{ transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
      <Group position="apart" mt="lg" noWrap>
        <Text weight={500} size="lg" sx={(theme) => ({ color: theme.colors.lightGrey })}>
          {data.leftImageTitle}
        </Text>
        <Text weight={500} size="lg" sx={(theme) => ({ color: theme.colors.lightGrey })}>
          {data.rightImageTitle}
        </Text>
      </Group>
    </>
  );
};

export default ImageSlider;
