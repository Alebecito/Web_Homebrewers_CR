import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import { useState } from "react";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const [successSB, setSuccessSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);

  const openErrorSB = () => {
    setErrorSB(true);
    setTimeout(() => {
      setErrorSB(false);
    }, 3000);
  };
  const closeErrorSB = () => setErrorSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Notificación"
      content="Se ha habilitado el usuario"
      dateTime="1 second ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Notificación"
      content="Se ha deshabilitado el usuario"
      dateTime="1 second ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Notificación"
      content="Se ha eliminado el usuario"
      dateTime="1 second ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return {
    columns: [
      { Header: "Usuario", accessor: "author", width: "45%", align: "left" },
      { Header: "Estado", accessor: "status", align: "center" },
      { Header: "Fecha Registro", accessor: "employed", align: "center" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: (
          <Author
            image={team2}
            name="John Michael"
            email="john@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="habilitado"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            23/04/18
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton
              color="error"
              size="small"
              variant="text"
              onClick={openErrorSB}
            >
              Eliminar
            </MDButton>
            {renderErrorSB}
            <br />
            <MDButton color="warning" size="small" variant="text">
              Deshabilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team3}
            name="Alexa Liras"
            email="alexa@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            11/01/19
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Laurent Perrier"
            email="laurent@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="habilitado"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            19/09/17
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="warning" size="small" variant="text">
              Deshabilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team3}
            name="Michael Levi"
            email="michael@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="habilitado"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            24/12/08
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="warning" size="small" variant="text">
              Deshabilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team3}
            name="Richard Gran"
            email="richard@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            04/10/21
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton color="error" size="small" variant="text">
              Eliminar
            </MDButton>
            <br />
            <MDButton color="success" size="small" variant="text">
              Habilitar
            </MDButton>
          </div>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="deshabilitado"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <div>
            <MDButton
              color="error"
              size="small"
              variant="text"
              onClick={openErrorSB}
            >
              Eliminar
            </MDButton>
            {renderErrorSB}
            <br />
            <MDButton
              color="success"
              size="small"
              variant="text"
              onClick={openSuccessSB}
            >
              Habilitar
            </MDButton>
            {renderSuccessSB}
          </div>
        ),
      },
    ],
  };
}
