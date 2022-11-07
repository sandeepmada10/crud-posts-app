import React from 'react';
import TextField from '@mui/material/TextField';

export default function AddBodyControl() {
    return (
        <div>
            <TextField
                fullWidth
                id="outlined-textarea"
                variant='outlined'
                rows={6}
                multiline
                sx={{ marginBottom: '20px' }}
            />
        </div>
    )
}
