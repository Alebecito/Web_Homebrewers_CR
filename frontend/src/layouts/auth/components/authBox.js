import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import CardMedia from "@mui/material/CardMedia";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import axios from "axios";

function AuthBox({ name, email, image, registrationDate, noGutter, userId }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const handleAccept = () => {
    let res = axios.put(`http://localhost:5000/usuario/authorizeUser/${userId}`);
    alert("Usuario " + name + " autorizado");
    location.reload();
  };

  const handleDeny = () => {
    let res = axios.delete(`http://localhost:5000/usuario/deleteUser/${userId}`);
    alert("Usuario " + name + " rechazado");
    location.reload();
  };

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {name}
          </MDTypography>

          <MDBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <MDBox mr={1}>
              <MDButton variant="text" color="success" onClick={handleAccept}>
                <Icon>check</Icon>&nbsp;aceptar
              </MDButton>
            </MDBox>
            <MDButton variant="text" color="error" onClick={handleDeny}>
              <Icon>block</Icon>&nbsp;rechazar
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Correo Electrónico:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium">
              {email}
            </MDTypography>
          </MDTypography>
          <br />
          <MDTypography variant="caption" color="text">
            Fecha solicitud:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium">
              {registrationDate}
            </MDTypography>
          </MDTypography>
        </MDBox>

        <div style={{ paddingLeft: "300px" }}>
          <CardMedia
            component="img"
            sx={{
              height: 250,
              width: 500,
              maxHeight: { xs: 500, md: 300 },
              maxWidth: { xs: 500, md: 1000 },
              l: 10,
            }}
            src={image}
          />
        </div>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Bill
AuthBox.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
AuthBox.propTypes = {
  name: PropTypes.string.isRequired,

  email: PropTypes.string.isRequired,

  noGutter: PropTypes.bool,
};

export default AuthBox;
