import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, IconButton, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/system';
import SaveButton from '../../Buttons/SaveButton';
import CrossIcon from '../../Buttons/CrossIcon';
import BasicGrid from '../FeedData/BasicGrid';


export default function AddPost(props) {
    const {inputs,setInputs,handleClose,GetAllData }=props;

    const AddPostApi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
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
            .then((json) => {
                console.log(json);
                GetAllData();
                handleClose();
            })
           
    }

    const handleChange = (e) => {
        setInputs((inputs) => ({
            ...inputs,
            [e.target.id]: e.target.value,

        }));
    }
    const handleSubmit = (e) => {
        alert('Data saved successfully')
        e.preventDefault();
        AddPostApi();
       
        console.log(inputs);
    }
   
    return (
        <div>
            <Container maxWidth="md">
                <Box sx={{ bgcolor: '#d9d9d9', height: '100vh' }} >
                    <BasicGrid/>
                    <Card sx={{ bgcolor: '#000000', margin: '100px 40px', border: 1 }}>
                        <Grid container>
                            <Grid item xs={10} md={10}>
                                <Typography sx={{ color: 'white', padding: '20px' }}>
                                    Add Post
                                </Typography>
                            </Grid>
                            <IconButton onClick={handleClose}>
                                <CrossIcon />
                            </IconButton>

                        </Grid>

                        <CardContent sx={{ bgcolor: '#FFFCFC', height: '50vh' }}>
                            <Typography >Title</Typography>
                            <TextField
                                fullWidth
                                id="title"
                                variant="outlined"
                                onChange={handleChange}
                                sx={{ marginBottom: '20px ' }} />
                            <Typography>Body</Typography>
                            <TextField
                                fullWidth
                                id="body"
                                variant='outlined'
                                rows={6}
                                multiline
                                onChange={handleChange}
                                sx={{ marginBottom: '20px' }}
                            />
                            <Grid item sx={{ marginLeft: '270px' }}>
                                <IconButton 
                                onClick={handleSubmit} >
                                    <SaveButton  />
                                </IconButton>
                                
                            </Grid>
                           
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}
