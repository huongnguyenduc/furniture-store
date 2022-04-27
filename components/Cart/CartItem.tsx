import { Box, Button, Grid, Group, Image, Text } from '@mantine/core';
import React from 'react';
import { X } from 'tabler-icons-react';

const CartItem = () => {
  return (
    <Box
      sx={(theme) => ({ borderTop: `1px solid ${theme.colors.lightBorder}`, position: 'relative' })}
      pt={30}
      pb={30}
      px={10}
    >
      <Grid>
        <Grid.Col sm={5}>
          <Box sx={(theme) => ({ border: `1px solid ${theme.colors.lightBorder}` })}>
            <Image
              alt="image"
              src="https://content.cylindo.com/api/v2/4472/products/ALXR.LEATHR.CHAR.ACCENT/frames/1/ALXR.LEATHR.CHAR.ACCENT.JPG?background=FFFFFF&feature=COLOR:LTHR-02&feature=FINISH:LEG005-3"
            />
          </Box>
        </Grid.Col>
        <Grid.Col sm={1} />
        <Grid.Col sm={6}>
          <Box
            sx={(theme) => ({
              position: 'relative',
            })}
          >
            <Box sx={{ position: 'absolute', right: 0 }}>
              <Text
                sx={(theme) => ({ color: theme.colors.mixGrey, fontSize: 22, textAlign: 'right' })}
              >
                $2045 x 2
              </Text>
              <Text
                size="xl"
                mt={6}
                sx={(theme) => ({
                  color: theme.colors.lightGrey,
                  letterSpacing: '0.02em',
                  textAlign: 'right',
                })}
              >
                $4090
              </Text>
            </Box>
            <Text
              transform="uppercase"
              size="xl"
              weight={600}
              sx={(theme) => ({
                color: theme.colors.brownBackground,
                letterSpacing: '0.1em',
                lineHeight: 1.1,
                cursor: 'pointer',
              })}
            >
              SLOAN
            </Text>
            <Text sx={(theme) => ({ color: theme.colors.lightGrey, lineHeight: 1.35 })} size="lg">
              Fabric 2-Seat Sofa
            </Text>
            <Box mt={10}>
              <Text sx={(theme) => ({ color: theme.colors.mediumGrey })}>Color</Text>
              <Group mt={4}>
                <Image
                  width={20}
                  height={20}
                  src="https://media.interiordefine.com/media//swatches/thumbnail/1635282882_bi-132_perf-textured-weave_opal.jpg"
                />
                <Text sx={(theme) => ({ color: theme.colors.lightGrey })} mt={5}>
                  Performance Textured Weave - Opal
                </Text>
              </Group>
            </Box>
            <Box mt={20}>
              <Text
                sx={(theme) => ({
                  borderTop: `1px solid ${theme.colors.lightBorder}`,
                  borderBottom: `1px solid ${theme.colors.lightBorder}`,
                  padding: '15px 0',
                  color: theme.colors.lightGrey,
                })}
              >
                Delivered in 22–25 weeks
              </Text>
            </Box>
            <Group position="apart" mt="md" sx={{ position: 'relative' }}>
              <Box
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.deepBorder}`,
                  color: theme.colors.lightGrey,
                  width: 0,
                  display: 'flex',
                  overflow: 'hidden',
                  padding: '15px 0 10px 40px',
                  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  '&:before': {
                    content: '""',
                    width: '2px',
                    height: '12px',
                    background: theme.colors.deepBorder,
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%) rotate(45deg)',
                  },
                  '&:after': {
                    content: '""',
                    width: '2px',
                    height: '12px',
                    background: '#767676',
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%) rotate(-45deg)',
                  },
                  '&:hover': {
                    width: '100px',
                  },
                })}
              >
                Remove
              </Box>
              <Group>
                <Box
                  sx={(theme) => ({
                    border: `1px solid ${theme.colors.deepBorder}`,
                    color: theme.colors.lightGrey,
                    width: '44px',
                    height: '44px',
                    padding: '15px 0 10px 40px',
                    transition: 'background .3s ease-in-out',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:after': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      background: theme.colors.lightGrey,
                      '&:after': { background: theme.white },
                      '&:before': { background: theme.white },
                    },
                  })}
                />
                <Text>1</Text>
                <Box
                  sx={(theme) => ({
                    border: `1px solid ${theme.colors.deepBorder}`,
                    color: theme.colors.lightGrey,
                    width: '44px',
                    height: '44px',
                    padding: '15px 0 10px 40px',
                    transition: 'background .3s ease-in-out',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:after': {
                      content: '""',
                      width: '12px',
                      height: '2px',
                      background: theme.colors.deepBorder,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotate(-90deg)',
                      transition: 'background 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      background: theme.colors.lightGrey,
                      '&:after': { background: theme.white },
                      '&:before': { background: theme.white },
                    },
                  })}
                />
              </Group>
            </Group>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default CartItem;
