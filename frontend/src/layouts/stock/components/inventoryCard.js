import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

export default function InventoryCard() {
  const handleDelete = () => {
    alert("Eliminar producto del inventario");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="recipe"></Avatar>}
        title="Lorem ipsum dolor sit amet, consectetur."
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
        <br />
        <MDTypography variant="h6">Cantidad: 20</MDTypography>
        <MDTypography variant="h6">Fecha de caducidad: 2021-12-31</MDTypography>
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
