import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MDBox from "components/MDBox";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import OwnReportInfoCard from "../components/ownReportInfoCard";

function Own_Reports() {

  



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <OwnReportInfoCard
              title="Reporte"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              info={{
                De: "Alec M. Thompson",
                Para: "214124",
                "Tipo de Reporte": "Publicación",
                Fecha: "2021-10-10",
              }}
            />
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Own_Reports;
