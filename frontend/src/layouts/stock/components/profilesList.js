import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

function ProfilesList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(
    ({ fotoDePerfil, nombre, correo, id }) => (
      <MDBox
        key={nombre}
        component="li"
        display="flex"
        alignItems="center"
        py={1}
        mb={1}
      >
        <MDBox mr={2}>
          <MDAvatar src={fotoDePerfil} alt="avatar" shadow="md" />
        </MDBox>
        <MDBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <MDTypography variant="button" fontWeight="medium">
            {nombre}
          </MDTypography>
          <MDTypography variant="caption" color="text">
            {correo}
          </MDTypography>
        </MDBox>
        <MDBox ml="auto">
          <MDButton
            component={Link}
            to={"/stock/inventory"}
            variant="text"
            color="info"
          >
            {"Ver inventario"}
          </MDButton>
        </MDBox>
      </MDBox>
    )
  );

  return (
    <Card
      sx={{
        height: "700px",
        boxShadow: !shadow && "none",
        overflowY: "scroll",
      }}
    >
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
