import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import RemoveIconButton from '../../Buttons/RemoveIcon';
import EditUpdate from '../EditUpdate/EditUpdate';




export default function CardData(props) {
    const { inputs,setInputs, postsData,  GetAllData } = props;

    React.useEffect(() => {
        GetAllData();
    }, [])

    const handleDelete = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        }).then((response) => response.json())
            .then((json) => {
                console.log(json);
                GetAllData();
            });
    }
const DeletePost=()=>{
    alert("Data Deleted Successfully");
    handleDelete();
}

   
    return (
        <div>

            {
                postsData.map((item) => (
                    <Card sx={{ margin: '10px 30px', border: 1 }}>
                        <Grid container sx={{ bgcolor: '#000000', }}>
                            <Grid item xs={10} key={item.id}>
                                <Typography sx={{ color: 'white', padding: '10px' }}>
                                    {item.title}
                                </Typography>
                                
                            </Grid>
                            <IconButton onClick={DeletePost}
                            >
                                <RemoveIconButton />
                            </IconButton>
                        </Grid>
                        <CardContent sx={{ bgcolor: '#FFFCFC', minHeight: '10vh' }}
                        >
                            <Grid iem >
                                <Typography key={item.id} >
                                    {item.body}
                                </Typography>
                            </Grid>
                            <EditUpdate GetAllData={GetAllData} inputs={inputs} setInputs={setInputs} title={item.title} body={item.body}/>
                            </CardContent>
                    </Card>
                ))}
        </div>
    );
}

