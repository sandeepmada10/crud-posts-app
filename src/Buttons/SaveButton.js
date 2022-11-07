import * as React from 'react';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';


const ButtonSave=styled(Typography)({
  backgroundColor:'#7fe796',
  color:'black',
  padding:'5px 50px',
  borderRadius:'0px',
  borderColor:'black',
  textTransform:'capitalize',
  fontSize:'20px',
  variant:"outlined"
 
  
})

export default function SaveButton() {
  
  return (
      <ButtonSave  >
        Save
      </ButtonSave>
 
  );
}