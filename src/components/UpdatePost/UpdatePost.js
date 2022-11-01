import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled, Grid, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container ,Box} from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

import TextField from '@mui/material/TextField';
import SaveButton from '../saveButton';




const IconClose = styled(CloseIcon)({
    backgroundColor: 'red',
    fontSize: "30px",
    color: 'white',
    padding: '5px',
    marginLeft: '6px',
})

export default function UpdatePost() {
    const [values, setValues] = React.useState('sandeep')
    const [bodyValue, setBodyValue] = React.useState('This is the Update Body')

    const handleChangeInput = (e) => {
        setValues(e.target.value);
    }
    const handleChangeBody = (e) => {
        setBodyValue(e.target.value)
    }
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
                                    Update Post
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <IconClose sx={{ marginLeft: '40px' }} />
                                </IconButton>

                            </Grid>

                        </Grid>
                        <CardContent
                            sx={{ bgcolor: '#FFFCFC', height: '50vh' }}>
                            <Typography >Title</Typography>

                            <TextField
                                fullWidth
                                variant="outlined"
                                value={values}
                                onChange={handleChangeInput}
                                sx={{ marginBottom: '20px' }} />

                            <Typography>Body</Typography>

                            <TextField
                                fullWidth
                                variant='outlined'
                                rows={6}
                                multiline
                                value={bodyValue}
                                onChange={handleChangeBody}
                                sx={{ marginBottom: '20px' }}
                            />

                            <Grid item sx={{ marginLeft: '250px' }}>
                                <IconButton >
                                    <SaveButton />
                                </IconButton>
                            </Grid>
                            {/* <AddPopUp sx={{color:'black'}}/> */}
                        </CardContent>

                    </Card>

                </Box>
            </Container>
        </div>
    )
}
