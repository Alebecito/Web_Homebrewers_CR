import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
import { useEffect, useState } from "react";

function ReportInfoCard({ reportID, description, info, shadow }) {
  const labels = [];
  const values = [];
  const [admin, setAdmin] = useState("");
  const [open, setOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (event) => {
    setAdmin(event.target.value);
    setOpen(true);
  };

  const handleClick = async () => {
    if (open == true) {
      setOpen(false);
      let res = await axios.put(
        `http://localhost:5000/reportes/assignReport/${reportID}/${admin}`
      );
      alert(`El Reporte ` + reportID + ` se ha asignado a ${admin}`);
      location.reload(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`http://localhost:5000/usuario/getAdmins`);
      let data = res.data;
      setUsuarios(data);
    };
    fetchData().catch(console.error);
  }, []);

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(
        uppercaseLetter,
        ` ${uppercaseLetter.toLowerCase()}`
      );

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography
        variant="button"
        fontWeight="bold"
        textTransform="capitalize"
      >
        {label}: &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </MDTypography>
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          ID del Reporte: {reportID}
        </MDTypography>
        <MDTypography variant="body2" color="secondary">
          <Tooltip
            title={"Asignar reporte"}
            placement="top"
            onClick={handleClick}
          >
            <Icon>check</Icon>
          </Tooltip>
        </MDTypography>
      </MDBox>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          Descripción:
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox mb={2} lineHeight={1} width="500px">
          <MDTypography variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox opacity={0.3}>
          <Divider />
        </MDBox>
        <MDBox>{renderItems}</MDBox>
        <MDBox>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">Asignar Admin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={admin}
              label="admin"
              onChange={handleChange}
              sx={{ height: "50px", left: "-10px" }}
            >
              {usuarios.map((admin) => (
                <MenuItem value={admin.usuarioGUID}>{admin.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ReportInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ReportInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ReportInfoCard;
