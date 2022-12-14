import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

function ProfilesList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(({ image, name, email, action }) => (
    <MDBox
      key={name}
      component="li"
      display="flex"
      alignItems="center"
      py={1}
      mb={1}
    >
      <MDBox mr={2}>
        <MDAvatar src={image} alt="avatar" shadow="md" />
      </MDBox>
      <MDBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {email}
        </MDTypography>
      </MDBox>
      <MDBox ml="auto">
        {action.type === "internal" ? (
          <MDButton
            component={Link}
            to={action.route}
            variant="text"
            color="info"
          >
            {action.label}
          </MDButton>
        ) : (
          <MDButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </MDButton>
        )}
      </MDBox>
    </MDBox>
  ));

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
