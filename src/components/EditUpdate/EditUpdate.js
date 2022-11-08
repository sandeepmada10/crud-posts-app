import { Dialog, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import EditButton from '../../Buttons/EditButton'
import UpdatePost from '../UpdatePost/UpdatePost'


export default function EditUpdate({inputs,setInputs,title,body,userId,GetAllData}) {
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
                    <UpdatePost GetAllData={GetAllData} inputs={inputs} setInputs={setInputs} title={title} body={body} userId={userId} handleClose={handleClose} />
                </Dialog>
            </Grid>
        </div>
    )
}
