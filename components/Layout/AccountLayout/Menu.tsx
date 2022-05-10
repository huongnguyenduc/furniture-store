import React from 'react';
import { useRouter } from 'next/router';
import { createStyles } from '@mantine/core';
import { Text } from '@mantine/core';
import { menuData } from './MenuData';

const useStyles = createStyles((theme, _params) => ({
  menuListItem: {
    padding: '.62em 0',
    transform: 'translateX(0)',
    transition: 'transform 150ms ease-in, color 140ms ease-in',
    cursor: 'pointer',
    fontSize: '17px',
    letterSpacing: '0.023em',
    '&:hover': {
      transform: 'translateX(5px)',
      color: theme.colors.brownBackground,
    },
  },
}));

const AccountMenu = () => {
  const router = useRouter();
  const { classes } = useStyles();
  return (
    <>
      {menuData.map((item) => (
        <Text
          sx={(theme) => ({
            color: router.pathname.includes(item.link)
              ? theme.colors.brownBackground
              : theme.colors.lightGrey,
            opacity: item.title === 'Logout' ? 0.8 : 1,
          })}
          className={classes.menuListItem}
          onClick={() => router.push(item.link)}
          key={item.title}
        >
          {item.title}
        </Text>
      ))}
    </>
  );
};

export default AccountMenu;
