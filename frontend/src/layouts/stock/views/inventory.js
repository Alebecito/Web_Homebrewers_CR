import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import InventoryCard from "../components/inventoryCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";

export default function News() {
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
            <InventoryCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <InventoryCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <InventoryCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <InventoryCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <InventoryCard />
          </Grid>
          <Grid item xs="auto" md="auto">
            <InventoryCard />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
