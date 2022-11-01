import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled, Grid, IconButton, Button, DialogActions ,Dialog} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/system';

import SaveButton from '../saveButton';
import AddInputControl from '../controls/AddInputControl';
import AddBodyControl from '../controls/AddBodyControl';
import CrossIcon from '../../CrossIcon';

export default function AddPost() {
    const [close, setClose] = React.useState(false);

    const handleClickOpen = () => {
        setClose(true);
    };

    const handleClose = () => {
        setClose(false);
    };
    return (
        <div>
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#d9d9d9', height: '100vh' }} >
                    <Grid container>
                        <Grid item mx='auto'>
                            <Typography variant="h4">Posts</Typography>
                        </Grid>
                    </Grid>
                    <Card sx={{ bgcolor: '#000000', margin: '0px 40px', border: 1 }}>
                        <Grid container>
                            <Grid item xs={10} md={10}>
                                <Typography sx={{ color: 'white', padding: '20px' }}>
                                    Add Post
                                </Typography>
                            </Grid>
                            <CrossIcon />
                        </Grid>

                        <CardContent sx={{ bgcolor: '#FFFCFC', height: '50vh' }}>
                            <Typography >Title</Typography>
                            <AddInputControl />
                            <Typography>Body</Typography>
                            <AddBodyControl />

                            <Grid item sx={{ marginLeft: '250px' }}>
                                <Button onClick={handleClose}>
                                    <SaveButton />
                                </Button>
                                <Dialog fullScreen close={close} onClose={handleClose}>
                                    <AddPost />
                                </Dialog>
                            </Grid>
                            {/* <AddPopUp sx={{color:'black'}}/> */}
                        </CardContent>

                    </Card>
                </Box>


            </Container>
        </div>
    )
}
