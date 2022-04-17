import React from 'react';
import { Container, Box, Text, MediaQuery, ActionIcon } from '@mantine/core';
import { BrandInstagram, BrandFacebook } from 'tabler-icons-react';

const Footer = () => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.colors.softGrey })}>
      <Container size="lg" py="xl">
        <MediaQuery smallerThan="sm" styles={{ flexDirection: 'column-reverse' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <MediaQuery smallerThan="sm" styles={{ flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <Text
                  sx={(theme) => ({
                    color: theme.colors.lightGrey,
                  })}
                >
                  © 2022 All Rights Reserved
                </Text>
                <Box sx={{ display: 'flex' }}>
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      cursor: 'pointer',
                      '&:hover': { color: theme.colors.mediumGrey },
                    })}
                    ml="lg"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      cursor: 'pointer',
                      '&:hover': { color: theme.colors.mediumGrey },
                    })}
                    ml="lg"
                  >
                    Terms of Service
                  </Text>
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.lightGrey,
                      cursor: 'pointer',
                      '&:hover': { color: theme.colors.mediumGrey },
                    })}
                    ml="lg"
                  >
                    Accessibility CCPA Data Request
                  </Text>
                </Box>
              </Box>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Text
                sx={{ letterSpacing: '4px' }}
                transform="uppercase"
                size="xl"
                weight={500}
                align="center"
                py="xl"
              >
                Furniture Shop
              </Text>
            </MediaQuery>
            <Box sx={{ display: 'flex' }}>
              <ActionIcon<'a'>
                component="a"
                href="https://www.facebook.com/duchuong007/"
                radius="xs"
                variant="transparent"
              >
                <BrandFacebook size={24} strokeWidth={1.5} color={'black'} />
              </ActionIcon>
              <ActionIcon<'a'>
                component="a"
                href="https://www.instagram.com/duchuong007/"
                radius="xs"
                variant="transparent"
              >
                <BrandInstagram size={24} strokeWidth={1.5} color={'black'} />
              </ActionIcon>
            </Box>
          </Box>
        </MediaQuery>
      </Container>
    </Box>
  );
};

export default Footer;
