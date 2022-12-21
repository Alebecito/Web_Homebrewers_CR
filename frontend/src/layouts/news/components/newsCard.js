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
import Edit from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

export default function NewsCard({
  title,
  date,
  image,
  description,
  likes,
  comments,
  id,
}) {
  const handleDelete = () => {
    alert("delete");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="recipe"></Avatar>}
        action={
          <Link to={`/news/edit_news/${id}`}>
            <IconButton aria-label="settings">
              <Edit />
            </IconButton>
          </Link>
        }
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
        alt="News Image"
      />
      <CardContent>
        <MDTypography variant="body2" color="text.secondary">
          {description}
        </MDTypography>
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
          <Link to={`/news/comments/${id}`}>
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
