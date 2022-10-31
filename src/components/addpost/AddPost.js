import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, Grid, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import CustomizedButtons from '../addpost/AddPost';
import TextField from '@mui/material/TextField';


const IconClose = styled(CloseIcon)({
    backgroundColor: 'red',
    fontSize: "30px",
    color: 'white',
    padding: '5px',
    marginLeft: '6px',
})

export default function AddPost() {
    return (
        <div>
            <Container maxWidth="md">
                <Card sx={{ bgcolor: '#000000', margin: '0px 40px', border: 1 }}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography sx={{ color: 'white', padding: '10px' }}>
                                Add Post
                            </Typography>
                        </Grid>
                        <IconButton >
                            <IconClose />
                        </IconButton>


                    </Grid>
                    <CardContent
                        sx={{ bgcolor: '#FFFCFC', height: '30vh' }}>
                        <Typography >
                            Title
                        </Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </CardContent>
                </Card>
                <Grid>
                    <CustomizedButtons />
                </Grid>
            </Container>
        </div>
    )
}
