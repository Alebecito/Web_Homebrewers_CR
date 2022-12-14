import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import NewsCard from "layouts/news/components/newsCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/news/publish_news");
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
          <Grid item xs="auto" md="auto">
            <NewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <NewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <NewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <NewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <NewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <NewsCard />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
