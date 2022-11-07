import { Dialog, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import EditButton from '../../Buttons/EditButton'
import UpdatePost from '../UpdatePost/UpdatePost'


export default function EditUpdate({title,body}) {
    // const [updateData,setUpdateData]=useState(false)
    const [openDialog,setOpenDialog]=useState(false);
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };
    return (
        <div >
            <Grid item sx={{ float: 'right', marginTop: '30px' }}>
                <IconButton onClick={handleClickOpen}>
                    <EditButton />
                </IconButton>

                <Dialog fullScreen open={openDialog} >
                    <UpdatePost title={title} body={body} handleClose={handleClose} />
                </Dialog>
            </Grid>
        </div>
    )
}
