export interface MenuItem {
  title: string;
  link: string;
}

export const menuData: MenuItem[] = [
  { title: 'Order history', link: '/account/order/history' },
  { title: 'Account Information', link: '/account/edit' },
  { title: 'Logout', link: '/logout' },
];
