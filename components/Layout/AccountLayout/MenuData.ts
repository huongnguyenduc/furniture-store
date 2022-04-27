export interface MenuItem {
  title: string;
  link: string;
}

export const menuData: MenuItem[] = [
  { title: 'Your latest order', link: '/account/order/latest' },
  { title: 'Order history', link: '/account/order/history' },
  { title: 'Account Information', link: '/account/edit' },
  { title: 'Addresses', link: '/account/addresses' },
  { title: 'Logout', link: '/logout' },
];
