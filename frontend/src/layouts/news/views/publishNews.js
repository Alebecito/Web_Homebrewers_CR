import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import { useParams } from "react-router-dom";
import { useState, createRef } from "react";
import axios from "axios";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as moment from "moment";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Divider,
  Container,
} from "@material-ui/core";
import "./news_image.css";

export default function Edit_News(props) {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [newImg, setNewImg] = useState("");
  const inputReference = createRef();
  const navigate = useNavigate();
  const formData = new FormData();
  const currentDate = new Date();

  const fileUploadAction = () => {
    inputReference.current.click();
  };

  const imageHandler = async (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setImg(URL.createObjectURL(newImage));
    }
    setNewImg(newImage);
  };

  const initialValues = {
    title: "",
    description: "",
    publishDate: moment(currentDate).format("YYYY-MM-DD"),
  };

  const createNew = async (tituloP, descripcionP, fechaP) => {
    formData.append("id", id);
    formData.append("titulo", tituloP);
    formData.append("descripcion", descripcionP);
    formData.append("fecha", fechaP);
    formData.append("imagen", newImg);

    let res = await axios.post(
      "https://homebrewersapis.onrender.com/publicacionesnoticias/AddNew",
      formData
    );
    alert("Noticia creada");
    navigate("/news", { replace: true });
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(255)
      .required("El titular de la noticia es requerido"),
    description: Yup.string().required("La descripción es requerida"),
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <>
        <MDBox mt={6}>
          <Grid
            container
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs="10" md="5">
              <>
                <MDBox
                  sx={{
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Container maxWidth="sm">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(data) => {
                        createNew(
                          data.title,
                          data.description,
                          data.publishDate
                        );
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <MDBox sx={{ mb: 1 }}>
                            <MDTypography color="textPrimary" variant="h2">
                              Crear noticia
                            </MDTypography>
                          </MDBox>
                          <MDInput
                            error={Boolean(touched.title && errors.title)}
                            fullWidth
                            helperText={touched.title && errors.title}
                            label="Titular"
                            margin="normal"
                            name="title"
                            autocomplete="off"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.title}
                            variant="outlined"
                          />
                          <MDInput
                            error={Boolean(
                              touched.description && errors.description
                            )}
                            fullWidth
                            helperText={
                              touched.description && errors.description
                            }
                            label="Descripción"
                            margin="normal"
                            name="description"
                            autocomplete="off"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="description"
                            value={values.description}
                            variant="outlined"
                            multiline
                          />
                          <MDInput
                            error={Boolean(
                              touched.birthDate && errors.birthDate
                            )}
                            fullWidth
                            helperText={touched.birthDate && errors.birthDate}
                            name="publishDate"
                            label="Fecha de publicación"
                            type="date"
                            margin="normal"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.publishDate}
                            variant="outlined"
                            disabled="true"
                          />
                          <MDBox sx={{ py: 2 }}>
                            <MDButton
                              color="secondary"
                              disabled={isSubmitting}
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                            >
                              Crear
                            </MDButton>
                          </MDBox>
                        </form>
                      )}
                    </Formik>
                  </Container>
                </MDBox>
              </>
            </Grid>
            <Grid item xs="10" md="5">
              <Card>
                <CardContent>
                  <MDBox
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    {...props}
                  >
                    <Avatar src={img} variant="square" id="avatar" />
                  </MDBox>
                </CardContent>
                <Divider />
                <CardActions>
                  <MDButton
                    color="secondary"
                    fullWidth
                    variant="text"
                    onClick={fileUploadAction}
                  >
                    Elegir imagen
                  </MDButton>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    ref={inputReference}
                    onChange={imageHandler}
                    style={{ display: "none" }}
                  />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </>
    </DashboardLayout>
  );
}
