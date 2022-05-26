import React from 'react';
import { Accordion, Drawer, Text, ScrollArea, Group, Image } from '@mantine/core';

import { ChevronRight } from 'tabler-icons-react';
import { categoryList } from './CategoryList';
import Router from 'next/router';

interface AccordionItemProps {
  label: string;
  image: string;
}

function AccordionLabel({ label, image }: AccordionItemProps) {
  return (
    <Group noWrap position="apart">
      <Text size="lg">{label}</Text>
      {image && <Image src={image} alt={label} height={80} />}
    </Group>
  );
}

export default function CategoryDrawer({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (shouldOpen: boolean) => void;
}) {
  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title="Category"
      padding="xl"
      size="xl"
    >
      <ScrollArea style={{ height: `88vh` }} offsetScrollbars>
        <Accordion initialItem={-1}>
          {categoryList.map((item) => (
            <Accordion.Item label={<AccordionLabel {...item} />} key={item.label + 'parent'}>
              {item.items.map((item) => (
                <Accordion initialItem={-1} key={item.label + 'accordion'}>
                  <Accordion.Item
                    label={<AccordionLabel {...item} />}
                    key={item.label}
                    icon={
                      !item.items.length ? <ChevronRight strokeWidth={1} size={22} /> : undefined
                    }
                    disableIconRotation={!item.items.length}
                    iconPosition={!item.image || !item.items.length ? 'right' : 'left'}
                  >
                    {item.items?.map((subItem) => (
                      <Text
                        pb={12}
                        sx={{
                          '&:hover': {
                            transform: 'translateX(10px)',
                          },
                          transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                        }}
                        key={`${subItem.toString()}-subheader`}
                        onClick={() => {
                          if (typeof subItem !== 'string') {
                            Router.push(
                              `search?q=${''}&category=${item.categoryId}&subCategories=${
                                subItem.categoryId
                              }`
                            );
                          }
                        }}
                      >
                        {typeof subItem === 'string' ? subItem : subItem.label}
                      </Text>
                    ))}
                  </Accordion.Item>
                </Accordion>
              ))}
            </Accordion.Item>
          ))}
        </Accordion>
      </ScrollArea>
    </Drawer>
  );
}
