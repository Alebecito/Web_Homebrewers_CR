import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import AuthBox from "./authBox";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AuthInformation() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`http://localhost:5000/usuario/auth`);
      let data = res.data;
      setUsuarios(data);
    };
    fetchData().catch(console.error);
  }, []);

  const parseDate = (date) => {
    let dateArray = date.split("T");
    let dateParsed = dateArray[0];
    return dateParsed;
  };

  return (
    <div style={{ position: "absolute", left: "350px" }}>
      <Card id="delete-account">
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Usuarios por autenticar
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
          >
            {usuarios.map((usuario) => (
              <AuthBox name={usuario.nombre} email={usuario.correo} image={usuario.cedula} registrationDate={parseDate(usuario.fechaRegistro)}/>
            ))}
          </MDBox>
        </MDBox>
      </Card>
    </div>
  );
}

export default AuthInformation;
