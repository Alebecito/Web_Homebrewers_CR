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
import axios from "axios";

export default function InventoryCard({
  title,
  description,
  quantity,
  date,
  productImage,
  productoId,
}) {
  const handleDelete = async () => {
    let res = await axios.delete(
      `https://homebrewersapis.onrender.com/producto/deleteProduct/${productoId}`
    );
    alert("Producto " + title + " eliminado del inventario");

    location.reload(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="recipe"></Avatar>}
        title={title}
      />
      <CardMedia
        component="img"
        sx={{
          height: 194,
          width: 315,
          l: 10,
        }}
        height="194"
        src={productImage}
        alt="Post"
      />
      <CardContent>
        <MDTypography variant="body2" color="text.secondary">
          {description}
        </MDTypography>
        <br />
        <MDTypography variant="h6">Cantidad: {quantity}</MDTypography>
        <MDTypography variant="h6">Fecha de caducidad: {date}</MDTypography>
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
