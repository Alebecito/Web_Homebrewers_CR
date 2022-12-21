import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import ReviewsCard from "../components/reviewsCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get(
        `http://localhost:5000/resena/getAllReviewsFromUserAsAdmin/${id}`
      );
      let data = res.data[0];
      setReviews(data);
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
              {reviews.map((review) => (
                <Grid item xs="auto" md="auto">
                  <ReviewsCard
                    title={review.titulo}
                    date={parseDate(review.fecha)}
                    rating={review.puntuacion}
                    description={review.cuerpo}
                    to={review.haciaGUID}
                    reviewId={review.reseñaGUID}
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
