import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import team2 from "assets/images/team-2.jpg";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import { useState, useEffect } from "react";
import axios from "axios";

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

  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`http://localhost:5000/usuario/getUsersState`);
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

  const [successSB, setSuccessSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => {
    setSuccessSB(true);
    setTimeout(() => {
      setSuccessSB(false);
    }, 3000);
  };

  const openWarningSB = () => {
    setWarningSB(true);
    setTimeout(() => {
      setWarningSB(false);
    }, 3000);
  };

  const openErrorSB = () => {
    setErrorSB(true);
    setTimeout(() => {
      setErrorSB(false);
    }, 3000);
  };

  const closeErrorSB = () => setErrorSB(false);
  const closeWarningSB = () => setWarningSB(false);
  const closeSuccessSB = () => setSuccessSB(false);

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
      { Header: "Usuario", accessor: "user", width: "45%", align: "left" },
      { Header: "Estado", accessor: "status", align: "center" },
      { Header: "Fecha Registro", accessor: "date", align: "center" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows: usuarios.map((usuario) => ({
      user: (
        <Author
          image={usuario.fotoDePerfil}
          name={usuario.nombre}
          email={usuario.correo}
        />
      ),
      status: (
        <MDBox ml={-1}>
          {usuario.estado === "habilitado" ? (
            <MDBadge
              badgeContent="habilitado"
              color="success"
              variant="gradient"
              size="sm"
            />
          ) : (
            <MDBadge
              badgeContent="deshabilitado"
              color="secondary"
              variant="gradient"
              size="sm"
            />
          )}
        </MDBox>
      ),
      date: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {parseDate(usuario.fechaRegistro)}
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
          {usuario.estado === "habilitado" ? (
            <>
              <MDButton
                color="warning"
                size="small"
                variant="text"
                onClick={openWarningSB}
              >
                Deshabilitar
              </MDButton>
              {renderWarningSB}
            </>
          ) : (
            <>
              <MDButton
                color="success"
                size="small"
                variant="text"
                onClick={openSuccessSB}
              >
                Habilitar
              </MDButton>
              {renderSuccessSB}
            </>
          )}
        </div>
      ),
    })),
  };
}
