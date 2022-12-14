import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import News_Details from "./news_details";
import News_Image from "./news_image";

export default function Publish_News() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6}>
        <Grid
          container
          spacing={10}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs="10" md="5">
            <News_Details />
          </Grid>
          <Grid item xs="10" md="5">
            <News_Image />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
