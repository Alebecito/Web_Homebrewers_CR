import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import PostsCard from "../components/postsCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";

export default function Posts() {
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
            <PostsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <PostsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <PostsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <PostsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <PostsCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <PostsCard />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
