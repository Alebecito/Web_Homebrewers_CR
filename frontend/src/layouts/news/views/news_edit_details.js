import { useNavigate } from "react-router-dom";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Container } from "@material-ui/core";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const News_Details_Edit = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: "Shrimp and Chorizo Paella",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    publishDate: "2016-09-14",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(255)
      .required("El titular de la noticia es requerido"),
    description: Yup.string().required("La descripción es requerida"),
  });

  return (
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
              alert("Noticia editada");
              navigate("/news", { replace: true });
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
                    Editar noticia
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
                  error={Boolean(touched.description && errors.description)}
                  fullWidth
                  helperText={touched.description && errors.description}
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
                  error={Boolean(touched.birthDate && errors.birthDate)}
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
                    Editar
                  </MDButton>
                </MDBox>
              </form>
            )}
          </Formik>
        </Container>
      </MDBox>
    </>
  );
};

export default News_Details_Edit;
