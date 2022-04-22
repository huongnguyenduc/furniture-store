import { Container, Text, Box, Button, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const BannerSection = () => {
  const matches = useMediaQuery('(min-width: 430px)');
  return (
    <Container size={1440} px={0}>
      <Box
        sx={{
          minHeight: 540,
          backgroundImage:
            "url('https://media.interiordefine.com/media/wysiwyg/april-sale22/hero-desk_1x.jpg')",
          backgroundSize: 'cover',
          // backgroundPosition: ""
        }}
      >
        <MediaQuery
          smallerThan="sm"
          styles={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.05))',
          }}
        >
          <Box mb="xl" p={matches ? 48 : 24}>
            <Text
              mb="xl"
              weight="normal"
              sx={(theme) => ({ color: theme.colors.deepBlue, fontSize: 22 })}
            >
              15% OFF
            </Text>
            <Text
              mb="xl"
              sx={(theme) => ({ color: theme.colors.deepBlue, fontSize: matches ? 64 : 48 })}
            >
              seeing spring
            </Text>
            <Text size="md" weight={300} sx={(theme) => ({ color: theme.colors.deepBlue })}>
              Customize in full bloom. 15% off ends 22/4.
            </Text>
          </Box>
        </MediaQuery>
        <MediaQuery
          smallerThan="sm"
          styles={{
            display: 'none',
          }}
        >
          <Button
            size="lg"
            radius={20}
            variant="white"
            color="black"
            sx={{ fontWeight: 300, fontSize: 16 }}
            ml={48}
          >
            Start customizing
          </Button>
        </MediaQuery>
      </Box>
    </Container>
  );
};

export default BannerSection;
