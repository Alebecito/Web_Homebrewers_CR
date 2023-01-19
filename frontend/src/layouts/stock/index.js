import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import MDBox from "components/MDBox";
import ProfilesList from "./components/profilesList";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function Stock() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get(
        `https://homebrewersapis.onrender.com/usuario/GetAllUsersInfo`
      );
      let data = res.data;
      setUsuarios(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <>
        {loading === true ? (
          <MDBox sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="secondary" />
          </MDBox>
        ) : (
          <MDBox mt={6}>
            <ProfilesList title="Usuarios" profiles={usuarios} shadow={false} />
          </MDBox>
        )}
      </>
    </DashboardLayout>
  );
}
