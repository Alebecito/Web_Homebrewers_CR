import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function data() {
  const User = ({ image, name, email }) => (
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
      let res = await axios.get(
        `https://homebrewersapis.onrender.com/usuario/GetAllUsersPostsReviews`
      );
      let data = res.data;
      setUsuarios(data);
    };
    fetchData().catch(console.error);
  }, []);

  return {
    columns: [
      { Header: "Usuario", accessor: "user", width: "45%", align: "left" },
      { Header: "ID", accessor: "id", align: "center" },
      { Header: "Publicaciones", accessor: "posts", align: "center" },
      { Header: "Reseñas", accessor: "reviews", align: "center" },
    ],

    rows: usuarios.map((usuario) => ({
      user: (
        <User
          image={usuario.fotoDePerfil}
          name={usuario.nombre}
          email={usuario.correo}
        />
      ),
      id: `${usuario.id}`,
      posts: (
        <MDButton
          color="secondary"
          size="small"
          variant="text"
          component={Link}
          to={`/posts_Reviews/Posts/${usuario.id}`}
        >
          Ver
        </MDButton>
      ),
      reviews: (
        <MDButton
          color="secondary"
          size="small"
          variant="text"
          component={Link}
          to={`/posts_Reviews/Reviews/${usuario.id}`}
        >
          Ver
        </MDButton>
      ),
    })),
  };
}
