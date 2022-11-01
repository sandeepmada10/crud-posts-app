import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {Grid,styled,Button} from "@mui/material";

const PlusIcon=styled(AddIcon)({
    border:'1px solid',
    padding:'1px',
    background:'#a4d4ef',
    color:'black',
    fontSize: "40px",
})
export default function AddIconPlus() {
  return (
    <div>
         
        <Grid item >
        <Button>
            <PlusIcon />
           
        </Button>
        </Grid>
   
    </div>
  )
}
