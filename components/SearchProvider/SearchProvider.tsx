import { createStyles, UnstyledButton, Group, Text, Image, Center, Badge } from '@mantine/core';
import { SpotlightProvider, SpotlightAction, SpotlightActionProps } from '@mantine/spotlight';
import { ReactNode } from 'react';
import { searchData } from './SearchData';

const useStyles = createStyles((theme) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: '10px 12px',
    borderRadius: theme.radius.sm,
  },

  actionHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  },

  actionBody: {
    flex: 1,
  },
}));

function CustomAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  ...others
}: SpotlightActionProps) {
  const { classes, cx } = useStyles(console.log('Hello'), {
    styles,
    classNames,
    name: 'Spotlight',
  });

  return (
    <UnstyledButton
      className={cx(classes.action, { [classes.actionHovered]: hovered })}
      tabIndex={-1}
      // onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Group noWrap>
        {action.image && (
          <Center>
            <Image src={action.image} alt={action.title} width={50} height={50} />
          </Center>
        )}

        <div className={classes.actionBody}>
          <Text>{action.title}</Text>

          {action.description && (
            <Text color="dimmed" size="xs">
              {action.description}
            </Text>
          )}
        </div>

        {action.new && <Badge>new</Badge>}
      </Group>
    </UnstyledButton>
  );
}

export function SearchProvider({ children }: { children: ReactNode }) {
  return (
    <SpotlightProvider
      actions={searchData}
      actionComponent={CustomAction}
      searchPlaceholder="Search..."
      transition={{
        in: { transform: 'translateY(0)', opacity: 1 },
        out: { transform: 'translateY(-20px)', opacity: 0 },
        transitionProperty: 'transform, opacity',
      }}
      filter={(query, actions) =>
        actions.filter((action) => action.title.toLowerCase().includes(query.toLowerCase()))
      }
      highlightQuery
      radius="md"
      limit={5}
    >
      {children}
    </SpotlightProvider>
  );
}
