import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommensIcon from "@mui/icons-material/Comment";
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import axios from "axios";

export default function PostsCard({ title, description, price, date, likes, comments, image, postId}) {
  
  const handleDelete = async () => {
    
    let res = await axios.delete(`http://localhost:5000/publicacionesnoticias/deleteNewOrPublication/${postId}`);

    alert("Publicacion "+title+" eliminada");
  
   
    location.reload(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="recipe"></Avatar>}
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        sx={{
          height: 194,
          width: 315,
          l: 10,
        }}
        height="194"
        src={image}
        alt="Post"
      />
      <CardContent>
        <MDTypography variant="body2" color="text.secondary">
          {description}
        </MDTypography>
        <MDTypography variant="h6">Precio expuesto: ₡ {price}</MDTypography>
        <MDTypography variant="h6">Fecha de caducidad: {date}</MDTypography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <IconButton aria-label="add to favorites" disabled={true}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid item>{likes}</Grid>
        </Grid>
        <Grid item>
          <Link to={`/posts_Reviews/Posts_Comments/${postId}`}>
            <IconButton aria-label="see comments">
              <CommensIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item>{comments}</Grid>
        <MDButton size="large" iconOnly="true" onClick={handleDelete}>
          <Icon style={{ color: "#FF0000" }}>delete</Icon>
        </MDButton>
      </CardActions>
    </Card>
  );
}
