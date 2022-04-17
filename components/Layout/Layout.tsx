import { useState } from 'react';
import { AppShell } from '@mantine/core';
import CategoryDrawer from './CategoryDrawer';
import CategoryHeader from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navbarOpened, setNavbarOpened] = useState(false);
  return (
    <>
      <CategoryDrawer opened={navbarOpened} setOpened={setNavbarOpened} />
      <AppShell
        padding={0}
        fixed
        header={<CategoryHeader opened={navbarOpened} setOpened={setNavbarOpened} />}
        style={{ overflowX: 'hidden' }}
        footer={<Footer />}
      >
        {children}
      </AppShell>
    </>
  );
}
