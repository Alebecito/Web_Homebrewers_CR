import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import AuthBox from "./authBox";
import React, { useState, useEffect } from "react";

function AuthInformation({ usuariosP }) {


const [usuarios, setUsuarios] = useState(usuariosP);

console.log(usuarios);
console.log(usuariosP)

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
            {usuarios.map((usuario) =>{

           return(
                <AuthBox 
                name={usuario.nombre}
                email={usuario.email}
                
              />
           )
            })}
            
             
            <AuthBox
              name={"oliver harper"}

              email="oliver@burrito.com"

            />
            <AuthBox
              name="lucas harper"
              email="lucas@stone-tech.com"

            />
            <AuthBox
              name="ethan james"
              email="ethan@fiber.com"

              noGutter
            />
          </MDBox>
        </MDBox>
      </Card>
    </div>
  );
}

export default AuthInformation;
