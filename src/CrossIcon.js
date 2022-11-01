import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid,styled } from '@mui/material';


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
            <Grid item>

                <Button>
                    <IconClose sx={{ marginLeft: '40px' }} />
                </Button>

            </Grid>
        </div>
    )
}
