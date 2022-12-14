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

export default function PostsCard() {
  const handleDelete = () => {
    alert("delete");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="recipe"></Avatar>}
        title="Lorem ipsum dolor sit amet, consectetur."
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
        src="https://labuenacheve.com/wp-content/uploads/2020/09/PORTADAS-WORDPRESS-16.png"
        alt="Post"
      />
      <CardContent>
        <MDTypography variant="body2" color="text.secondary">
          Lúpulo de buena calidad para la elaboración de cerveza artesanal.
        </MDTypography>
        <MDTypography variant="h6">Precio expuesto: ₡ 10000</MDTypography>
        <MDTypography variant="h6">Fecha de caducidad: 2021-12-31</MDTypography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <IconButton aria-label="add to favorites" disabled={true}>
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid item>50</Grid>
        </Grid>
        <Grid item>
          <Link to="/posts_Reviews/Posts_Comments">
            <IconButton aria-label="see comments">
              <CommensIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item>20</Grid>
        <MDButton size="large" iconOnly="true" onClick={handleDelete}>
          <Icon style={{ color: "#FF0000" }}>delete</Icon>
        </MDButton>
      </CardActions>
    </Card>
  );
}
