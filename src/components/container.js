import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardData from './cardData';
import BasicGrid from './BasicGrid';
import AddPost from './addpost/AddPost';
import { Grid } from '@mui/material';
import Topbar from "./Topbar";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="md">

        <Box sx={{ bgcolor: '#d9d9d9', height: '100vh' }} >

          <BasicGrid />
          < Grid container>
            <Grid item sx={{
              border: '1px solid black',
              height: '90vh',
              width: '110vh',
              margin: '20px'
            }}>
              <Topbar />
              <CardData />
            </Grid>
          </Grid>
        </Box>
      </Container>

    </React.Fragment>
  );
}
