import { useState } from 'react';
import { Affix, AppShell, Button, Transition } from '@mantine/core';
import CategoryDrawer from './CategoryDrawer';
import CategoryHeader from './Header';
import Footer from './Footer';
import { ArrowUp } from 'tabler-icons-react';
import { useWindowScroll } from '@mantine/hooks';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <CategoryDrawer opened={navbarOpened} setOpened={setNavbarOpened} />
      <AppShell
        padding={0}
        fixed
        header={<CategoryHeader opened={navbarOpened} setOpened={setNavbarOpened} />}
        footer={<Footer />}
      >
        {children}
        <Affix position={{ bottom: 20, right: 20 }} zIndex={10}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
                radius="xl"
                sx={(theme) => ({
                  color: theme.colors.lightGrey,
                  boxShadow: '0 0 2px 0.5px rgb(21 21 21 / 5%), 0 1px 5px 0 rgb(21 21 21 / 15%)',
                  backgroundColor: theme.white,
                })}
              >
                <ArrowUp />
              </Button>
            )}
          </Transition>
        </Affix>
      </AppShell>
    </>
  );
}
