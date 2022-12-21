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
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewsCard({ title, date, rating, description, to, reviewId }) {
  const handleDelete = () => {
    alert("Reseña eliminada");
  };

  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        `http://localhost:5000/usuario/GetUserEmail/14c942dc-8002-11ed-9b69-000d3a994565`
        // `http://localhost:5000/usuario/GetUserEmail/${to}`
      );
      let data = res.data;
      setEmail(data[0].correo);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 350 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red }} aria-label="review"></Avatar>}
        title={title}
        subheader={date}
      />
      <CardContent>
        <MDTypography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          <MDBox sx={{ fontWeight: "bold" }}>Dirigida a: {email}</MDBox>
        </MDTypography>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={rating}
          edit={false}
        />
        <MDBox sx={{ overflowY: "scroll", height: "250px" }}>
          <MDTypography variant="body2" color="text.secondary">
            {description}
          </MDTypography>
        </MDBox>
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
