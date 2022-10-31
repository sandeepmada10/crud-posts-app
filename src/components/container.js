import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardData from './card';
import BasicGrid from './grid';



export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
       
        <Box sx={{ bgcolor: '#d9d9d9', height: '100vh' }} >
          <BasicGrid />
          <CardData />
        </Box>

      </Container>
    </React.Fragment>
  );
}
