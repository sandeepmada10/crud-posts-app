import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import { CardHeader, IconButton,Grid ,styled} from '@mui/material';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';

const IconRemove=styled(RemoveIcon)({
    backgroundColor : 'red',
    fontSize: "30px",
    color:'white',
    padding:'5px',
    marginLeft:'6px',
}
)

export default function CardData() {
    return (
        <div>
            <Card sx={{ bgcolor: '#000000', margin: '0px 40px',border:1 }}>
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
                </CardContent>
                </Card>

        </div>
    );
}

