import React from 'react';
import { Grid,  IconButton } from "@mui/material";
import AddIconPlus from "./addIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


export default function Topbar() {
  return (
    <div>
         <Grid container>
                <Grid item xs={8} sx={{ margin: '30px 0 0 50px' }}>
                    <IconButton>
                        <AddIconPlus />
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropDownIcon sx={{ fontSize: '100px', color: '#54AB2B' }} />
                    </IconButton>
                </Grid>
                
                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropUpIcon sx={{ fontSize: '100px', color: 'white' }} />
                    </IconButton>
                </Grid>
                </Grid>
    </div>
  )
}
