import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import AuthBox from "./authBox";

function AuthInformation() {
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
            <AuthBox
              name="oliver liam"
              company="viking burrito"
              email="oliver@burrito.com"
              vat="01/12/2022"
            />
            <AuthBox
              name="lucas harper"
              company="stone tech zone"
              email="lucas@stone-tech.com"
              vat="12/12/2022"
            />
            <AuthBox
              name="ethan james"
              company="fiber notion"
              email="ethan@fiber.com"
              vat="08/12/2022"
              noGutter
            />
          </MDBox>
        </MDBox>
      </Card>
    </div>
  );
}

export default AuthInformation;
