import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardData from './CardData';
import BasicGrid from './BasicGrid';
import { Grid } from '@mui/material';
import Topbar from "./Topbar";


export default function SimpleContainer() {
  const [inputs, setInputs] = React.useState([])
  const [postsData, setPostsData] = React.useState([])

  const GetAllData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPostsData(json);
      });
  }
  


  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="md" >

        <Box sx={{ bgcolor: '#d9d9d9', minHeight: '700px' }} >

          <BasicGrid />
          < Grid container>
            <Grid item sx={{
              border: '1px solid black',
              minHeight: '700px',
              width: '100vh',
              margin: '30px'
            }}>
              <Topbar
                inputs={inputs}
                setInputs={setInputs}
                postsData={postsData}
                setPostsData={setPostsData}
                GetAllData={GetAllData} 
                />

              <CardData
                inputs={inputs}
                setInputs={setInputs}
                postsData={postsData}
                setPostsData={setPostsData}
                GetAllData={GetAllData} />

              {/* <Example/> */}
            </Grid>
          </Grid>
        </Box>
      </Container>

    </React.Fragment>
  );
}
