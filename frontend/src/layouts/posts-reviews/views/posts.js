import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import PostsCard from "../components/postsCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Posts() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get(
        `http://localhost:5000/publicacionesnoticias/getAllPublicationsfromUser/${id}`
      );
      let data = res.data;
      setPosts(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  const parseDate = (date) => {
    let dateArray = date.split("T");
    let dateParsed = dateArray[0];
    return dateParsed;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <>
        <MDBox mt={6}>
          {loading === true ? (
            <MDBox sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress color="secondary" />
            </MDBox>
          ) : (
            <Grid
              container
              spacing={10}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {posts.map((post) => (
                <Grid item xs="auto" md="auto">
                  <PostsCard
                    title={post.titulo}
                    description={post.cuerpo}
                    price={post.precioExpuesto}
                    date={parseDate(post.fecha)}
                    likes={post.cantidadDeLikes}
                    comments={post.cantidadDeComentarios}
                    image={post.fotoPublicacionNoticia}
                    postId={post.publicacionNoticiaGUID}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </MDBox>
      </>
    </DashboardLayout>
  );
}
