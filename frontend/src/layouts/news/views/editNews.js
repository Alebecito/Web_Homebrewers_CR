import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import News_Details_Edit from "./news_edit_details";
import News_Image from "./news_image";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import SelectInput from "@mui/material/Select/SelectInput";

export default function Edit_News() {
  const { id } = useParams();
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const parseDate = (date) => {
    let dateArray = date.split("T");
    let dateParsed = dateArray[0];
    return dateParsed;
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get(
        `http://localhost:5000/publicacionesnoticias/GetSpecificNewAdmin/${id}`
      );
      let data = res.data;
      data[0].fecha = parseDate(data[0].fecha);
      setDatos(data[0]);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <>
        <MDBox mt={6}>
          {loading === true ? (
            <MDBox sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress color="secondary" />
            </MDBox>
          ) : (
            <Grid
              container
              spacing={10}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs="10" md="5">
                <News_Details_Edit
                  title={datos.titulo}
                  description={datos.cuerpo}
                  date={datos.fecha}
                />
              </Grid>
              <Grid item xs="10" md="5">
                <News_Image image={datos.fotoPublicacionNoticia} />
              </Grid>
            </Grid>
          )}
        </MDBox>
      </>
    </DashboardLayout>
  );
}
