import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import AuthInformation from "./components/authInformation";
import React, { useState, useEffect, useCallback  } from "react";
import axios from "axios";
function Auth() {



  const [usuarios, setUsuarios] = useState([]);




  
  

useEffect(() => {

  const fetchData = async () => {
    let res = await axios.get(`http://localhost:5000/usuario/auth`);
    let  data  = res.data[0];
    setUsuarios(data);
  }
    fetchData().catch(console.error);;
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}></MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <AuthInformation usuariosP={usuarios}/>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Auth;
