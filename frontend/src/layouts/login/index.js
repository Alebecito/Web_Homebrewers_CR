import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "./components/basicLayout";
import bgImage from "assets/images/login.png";
import axios from "axios";
import React, { useState } from "react";

function Basic() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const checkIfEmail = (str) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
  };

  const onChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    if (!checkIfEmail(correo)) {
      alert("Correo invalido");
    } else {
      let res = await axios.get(
        `http://localhost:5000/usuario/login/${correo}/${password}`
      );
      if (res.data.length !== 0) {
        let data = res.data[0];
        if (data.estado !== "admin") {
          alert("Esta cuenta no tiene permisos de administrador");
        } else {
          localStorage.setItem("user", data.id);
          alert("Bienvenido");
          navigate("/auth", { replace: true });
        }
      } else {
        alert("Credenciales incorrectas");
      }
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="secondary"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Inicio de sesión
          </MDTypography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}
          ></Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                onChange={onChangeCorreo}
                value={correo}
                type="email"
                label="Correo electrónico"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                onChange={onChangePassword}
                value={password}
                type="password"
                label="Contraseña"
                fullWidth
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="secondary"
                fullWidth
                onClick={handleClick}
              >
                Iniciar sesión
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
