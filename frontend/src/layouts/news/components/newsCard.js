import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommensIcon from '@mui/icons-material/Comment';
import MDTypography from 'components/MDTypography';
import Edit from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import MDButton from 'components/MDButton';
import Icon from '@mui/material/Icon';

export default function NewsCard() {

    const handleDelete = () => {
        alert("delete");
    };

    return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
        avatar={
        <Avatar sx={{ bgcolor: red }} aria-label="recipe">
        </Avatar>
        }
        action={
        <Link to="/news/edit_news">
        <IconButton aria-label="settings">
            <Edit />
        </IconButton>
        </Link>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
    />
    <CardMedia
        component="img"
        sx={{
        height: 194,
        width: 315,
        l: 10,
        }}
        height="194"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsq1NacYKHKS-RudSBgbLZa_ndkD-lmmQfA&usqp=CAU"
        alt="Paella dish"
    />
    <CardContent>
        <MDTypography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        </MDTypography>
    </CardContent>
    <CardActions disableSpacing>

        <Grid container direction="row" alignItems="center">
            <Grid item>
                <IconButton aria-label="add to favorites" disabled={true}>
                <FavoriteIcon />
                </IconButton>
            </Grid>
            <Grid item>
                50
            </Grid>
        </Grid>
            <Grid item>
                <Link to="/news/comments">
                <IconButton aria-label="see comments">
                <CommensIcon />
                </IconButton>
                </Link>
            </Grid>
            <Grid item>
                20
            </Grid>
            <MDButton size="large" iconOnly="true" onClick={handleDelete}>
                    <Icon style={{ color: "#FF0000" }}>delete</Icon>
            </MDButton>
    </CardActions>
    </Card>
    );
}