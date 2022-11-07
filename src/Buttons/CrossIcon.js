import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {  styled } from '@mui/material';


const IconClose = styled(CloseIcon)({
    backgroundColor: 'red',
    fontSize: "30px",
    color: 'white',
    padding: '5px',
    marginLeft: '6px',
})
export default function CrossIcon() {
    return (
        <div>
            <IconClose sx={{ marginLeft: '40px' }} />

        </div>
    )
}
