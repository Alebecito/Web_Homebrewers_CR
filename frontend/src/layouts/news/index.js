import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import NewsCard from "layouts/news/components/newsCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState([]);

  const handleClick = () => {
    navigate("/news/publish_news");
  };

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        `https://homebrewersapis.onrender.com/publicacionesnoticias/getAllNews`
      );
      let data = res.data;
      setNoticias(data);
    };
    fetchData().catch(console.error);
  }, []);

  const parseDate = (date) => {
    let dateArray = date.split("T");
    let dateParsed = dateArray[0];
    return dateParsed;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDButton variant="gradient" color="secondary" onClick={handleClick}>
        Publicar noticia
      </MDButton>
      <MDBox mt={6}>
        <Grid
          container
          spacing={10}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {noticias.map((noticia) => (
            <Grid item xs="auto" md="auto">
              <NewsCard
                title={noticia.titulo}
                date={parseDate(noticia.fecha)}
                image={noticia.fotoPublicacionNoticia}
                description={noticia.cuerpo}
                likes={noticia.cantidadDeLikes}
                comments={noticia.cantidadDeComentarios}
                id={noticia.publicacionNoticiaGUID}
              />
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
