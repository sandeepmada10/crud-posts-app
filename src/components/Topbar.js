import React, { useState } from 'react';
import { Grid, IconButton, Button } from "@mui/material";
import AddIconPlus from "./addIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddPopUp from '../AddPopUp/AddPopUp';
import { Dialog, DialogActions } from '@mui/material';
import AddPost from './addpost/AddPost';
import SaveButton from './saveButton';



export default function Topbar(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Grid container>
                <Grid item xs={9} sx={{ margin: '10px 0 0 20px' }}>
                    <Button onClick={handleClickOpen}>
                        <AddIconPlus />
                    </Button>
                    <Dialog fullScreen open={open} onClose={handleClose}>
                        <AddPost />
                    
                       
                    </Dialog>

                </Grid>

                <Grid item xs={1}>
                    <IconButton >
                        <ArrowDropDownIcon sx={{ fontSize: '100px', color: 'green' }} />
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton>
                        <ArrowDropUpIcon sx={{ fontSize: '100px', color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>

            {/* <IconButton size='large'>
                        <ArrowDropDownIcon />
                    </IconButton> */}
        </div>
    )
}
