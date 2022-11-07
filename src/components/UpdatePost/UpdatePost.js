import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/system';

import TextField from '@mui/material/TextField';
import CrossIcon from '../../Buttons/CrossIcon';
import SaveButton from '../../Buttons/SaveButton';
import BasicGrid from '../FeedData/BasicGrid';
import '../../index.css'


export default function UpdatePost(props) {
    const { inputs, setInputs, handleClose, title, body,GetAllData } = props;

    const UpdatePostApi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'PUT',
            body: JSON.stringify({
                title: inputs.title,
                body: inputs.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => response.json())
            .then((json) => {console.log(json);
                GetAllData();
                handleClose();});
    }
    const handleChange = (e) => {
        setInputs((inputs) => ({
            ...inputs,
            [e.target.id]: e.target.value,

        }));
    }
    const handleSubmit = (e) => {
        alert('Data updated successfully')
        e.preventDefault();
        UpdatePostApi();

        console.log(inputs);
    }

    return (
        <div >

            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#d9d9d9' ,height: '100vh'}} >
                    <BasicGrid />
                    <Card sx={{ bgcolor: '#000000', margin: '100px 40px', border: 1 }}>
                        <Grid container>
                            <Grid item xs={10} md={10}>
                                <Typography sx={{ color: 'white', padding: '20px' }}>
                                    Update Post
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={handleClose}>
                                    <CrossIcon />
                                </IconButton>
                            </Grid>

                        </Grid>
                        <CardContent
                            sx={{ bgcolor: '#FFFCFC', height: '50vh' }}>
                            <Typography >Title</Typography>

                            <TextField
                                fullWidth
                                variant="outlined"
                                id="title"
                                value={title}
                                onChange={handleChange}
                                sx={{ marginBottom: '20px' }} />

                            <Typography>Body</Typography>

                            <TextField
                                fullWidth
                                variant='outlined'
                                value={body}
                                onChange={handleChange}
                                rows={6}
                                multiline
                                sx={{ marginBottom: '20px' }}
                            />

                            <Grid item sx={{ marginLeft: '270px' }}>
                                <IconButton onClick={handleSubmit}>
                                    <SaveButton />
                                </IconButton>
                            </Grid>

                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </div>

    )
}
