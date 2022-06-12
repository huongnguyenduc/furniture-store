import React from 'react';
import { signOut } from 'next-auth/react';
import { Box, Container, Text } from '@mantine/core';

const Logout = () => {
  React.useEffect(() => {
    signOut({ callbackUrl: '/login' });
  }, []);
  return (
    <Container size="lg">
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <svg
            width="54"
            height="54"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#AFA196"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </g>
            </g>
          </svg>
          <Text sx={{ marginTop: '10px' }}>Logging out...</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Logout;
