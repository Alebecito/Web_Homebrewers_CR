import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import MDBox from "components/MDBox";
import ProfilesList from "./components/profilesList";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Stock() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        `https://homebrewersapis.onrender.com/usuario/GetAllUsersInfo`
      );
      let data = res.data;
      setUsuarios(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6}>
        <ProfilesList title="Usuarios" profiles={usuarios} shadow={false} />
      </MDBox>
    </DashboardLayout>
  );
}
