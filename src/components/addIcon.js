import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {Grid,styled,IconButton} from "@mui/material";

const PlusIcon=styled(AddIcon)({
    border:'1px solid',
    padding:'1px',
    background:'#a4d4ef',
    color:'black',
})
export default function AddIconPlus() {
  return (
    <div>
         <Grid container>
        <Grid item >
        <IconButton>
            <PlusIcon sx={{ fontSize: "40px" }} />
           
        </IconButton>
        </Grid>
    </Grid>
    </div>
  )
}
