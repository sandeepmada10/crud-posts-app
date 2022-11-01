import React from 'react';
import TextField from '@mui/material/TextField';

export default function AddInputControl(props) {
    return (
        <div>
            <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                sx={{ marginBottom: '20px ' }} />
        </div>
    )
}
