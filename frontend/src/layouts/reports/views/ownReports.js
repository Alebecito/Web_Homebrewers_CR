import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import OwnReportInfoCard from "../components/ownReportInfoCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Own_Reports() {
  const [reports, setReports] = useState([]);
  const adminID = localStorage.getItem("user");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        `http://localhost:5000/reportes/getAllReportsFromAnAdmin/${adminID}`
      );
      let data = res.data;
      setReports(data);
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
      <MDBox mb={2} />
      <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          {reports.map((report) => (
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              {report.tipoReporte !== "Usuario" ? (
                <OwnReportInfoCard
                  reportID={report.reporteGUID}
                  description={report.descripcion}
                  info={{
                    De: report.deGUID,
                    Para: report.haciaGUID,
                    "Tipo de Reporte": report.tipoReporte,
                    "Dueño de elemento": report.realizadoPor,
                    Fecha: parseDate(report.fecha),
                  }}
                />
              ) : (
                <OwnReportInfoCard
                  reportID={report.reporteGUID}
                  description={report.descripcion}
                  info={{
                    De: report.deGUID,
                    Para: report.haciaGUID,
                    "Tipo de Reporte": report.tipoReporte,
                    Fecha: parseDate(report.fecha),
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Own_Reports;
