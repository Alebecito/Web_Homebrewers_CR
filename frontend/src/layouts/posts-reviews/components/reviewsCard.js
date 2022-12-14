import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import ReactStars from "react-rating-stars-component";

export default function ReviewsCard() {
  const handleDelete = () => {
    alert("Reseña eliminada");
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="review"></Avatar>}
        title="Lorem ipsum dolor sit amet, consectetur."
        subheader="September 14, 2016"
      />
      <CardContent>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={4}
          onChange={ratingChanged}
        />
        <MDTypography variant="body2" color="text.secondary">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </MDTypography>
      </CardContent>

      <CardActions disableSpacing>
        <Grid container direction="row" alignItems="center"></Grid>
        <MDButton size="large" iconOnly="true" onClick={handleDelete}>
          <Icon style={{ color: "#FF0000" }}>delete</Icon>
        </MDButton>
      </CardActions>
    </Card>
  );
}
