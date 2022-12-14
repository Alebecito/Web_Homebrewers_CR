import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import DataTable from "./components/dataTable";
import authorsTableData from "layouts/users/data/authorsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Usuarios registrados
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  canSearch={true}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
