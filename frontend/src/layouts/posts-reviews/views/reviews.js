import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import ReviewsCard from "../components/reviewsCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";

export default function Reviews() {
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
          <Grid item xs="auto" md="auto">
            <ReviewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <ReviewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <ReviewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <ReviewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <ReviewsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <ReviewsCard />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
