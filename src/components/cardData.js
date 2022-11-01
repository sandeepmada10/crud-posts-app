import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import {  IconButton,Grid ,styled,Button, Dialog} from '@mui/material';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import UpdatePost from './UpdatePost/UpdatePost';

const IconRemove=styled(RemoveIcon)({
    backgroundColor : 'red',
    fontSize: "30px",
    color:'white',
    padding:'5px',
    marginLeft:'6px',
}
)

export default function CardData() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Card sx={{ bgcolor: '#000000', margin: '0px 30px',border:1 }}>
                <Grid container>
                    <Grid item xs={11}>
                <Typography sx={{ color: 'white',padding:'10px'}}>
                    #1 Title
                </Typography>
                </Grid>
                <IconButton >
                    <IconRemove />
                </IconButton>
                </Grid>
                <CardContent
                    sx={{ bgcolor: '#FFFCFC', height: '12vh' }}>
                    <Typography >
                        This is a Posts crud app in react js.
                    </Typography>
                    <Grid item>
                    <Button variant='text' onClick={handleClickOpen}>
                        edit
                    </Button>
                    <Dialog fullScreen open={open} onClose={handleClose}>
                        <UpdatePost />
                    </Dialog>
                    </Grid>
                </CardContent>

                
                </Card>

        </div>
    );
}

