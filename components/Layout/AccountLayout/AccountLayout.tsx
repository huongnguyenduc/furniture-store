import { Grid, Box, Text, Accordion, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { createStyles } from '@mantine/core';
import AccountMenu from './Menu';
import { menuData } from './MenuData';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme, _params) => ({
  welcomeContainer: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      // Type safe child reference in nested selectors via ref
      margin: '0 0 .775em',
      padding: '0 0 .65em',
      borderBottom: '1px solid #E9EAE9',
    },
  },
}));

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const matchMd = useMediaQuery('(min-width: 992px)', false);
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Container size="lg" py={72}>
      <Grid>
        <Grid.Col md={3}>
          <Text
            sx={(theme) => ({
              color: theme.colors.mediumGrey,
              display: matchMd ? 'none' : 'block',
            })}
            size="xl"
            mb="md"
          >
            My account
          </Text>
          <Box className={classes.welcomeContainer}>
            <Text
              sx={(theme) => ({
                color: theme.colors.brownBackground,
              })}
              size={matchMd ? 'xl' : 'md'}
              transform="capitalize"
            >
              Hello Nguyen
            </Text>
          </Box>
          {matchMd ? (
            <AccountMenu />
          ) : (
            <Accordion
              iconPosition="right"
              styles={(theme) => ({
                content: { padding: 0 },
                label: {
                  color: theme.colors.mediumGrey,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: '16px',
                  letterSpacing: '0.023em',
                },
                control: {
                  paddingLeft: 0,
                  paddingRight: 0,
                  '&:focus': {
                    backgroundColor: theme.white,
                  },
                },
                contentInner: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
              })}
            >
              <Accordion.Item label="Menu">
                <AccountMenu />
              </Accordion.Item>
            </Accordion>
          )}
        </Grid.Col>
        <Grid.Col md={9}>
          <Box className={classes.welcomeContainer}>
            <Text
              sx={(theme) => ({
                color: theme.colors.brownBackground,
              })}
              size={matchMd ? 'xl' : 'md'}
              transform="capitalize"
            >
              {menuData.filter((item) => item.link === router.pathname)[0].title}
            </Text>
          </Box>
          {children}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AccountLayout;
