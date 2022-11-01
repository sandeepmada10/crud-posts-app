import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

export default function AddPopUp(props) {
    const {title,children,open,setOpen}=props;
  return (
    <>
   <Dialog>
        <DialogTitle open={open}>
            <div>Title</div>
        </DialogTitle>
        <DialogContent>
            <div>Dialg content</div>
        </DialogContent>
   </Dialog>
 

   </>
  )
}
