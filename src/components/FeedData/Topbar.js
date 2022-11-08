import React from 'react';
import { Grid, IconButton, Button } from "@mui/material";
import AddIconPlus from "../../Buttons/AddIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { Dialog } from '@mui/material';
import AddPost from '../Addpost/AddPost';




export default function Topbar(props) {
    const { inputs, setInputs, postsData, setPostsData, GetAllData } = props;
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
                <Grid item xs={9} sx={{ margin: '15px 0 0 20px' }}>
                    <Button onClick={handleClickOpen}>
                        <AddIconPlus />
                    </Button>
                    <Dialog fullScreen open={open} >
                        <AddPost open={open} handleClose={handleClose} inputs={inputs}
                            postsData={postsData}
                            setPostsData={setPostsData}
                            setInputs={setInputs} GetAllData={GetAllData}
                        />
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
        </div>
    )
}
