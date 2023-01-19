import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import ReportInfoCard from "./components/reportInfoCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function Reports() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reports/own_reports", { replace: true });
  };

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get(
        `https://homebrewersapis.onrender.com/reportes/getAllnotAssignedReports`
      );
      let data = res.data;
      setReports(data);
      setLoading(false);
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
        Mis Reportes
      </MDButton>
      <>
        {loading === true ? (
          <MDBox sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="secondary" />
          </MDBox>
        ) : (
          <>
            {" "}
            <MDBox mb={2} />
            <MDBox mt={5} mb={3}>
              <Grid container spacing={1}>
                {reports.map((report) => (
                  <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                    {report.tipoReporte !== "Usuario" ? (
                      report.tipoReporte !== "Noticia" ? (
                        <ReportInfoCard
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
                        <ReportInfoCard
                          reportID={report.reporteGUID}
                          description={report.descripcion}
                          info={{
                            De: report.deGUID,
                            Para: report.haciaGUID,
                            "Tipo de Reporte": report.tipoReporte,
                            Fecha: parseDate(report.fecha),
                          }}
                        />
                      )
                    ) : (
                      <ReportInfoCard
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
            </MDBox>{" "}
          </>
        )}
      </>
    </DashboardLayout>
  );
}

export default Reports;
