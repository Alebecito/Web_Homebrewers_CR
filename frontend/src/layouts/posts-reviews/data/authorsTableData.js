import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDButton from "components/MDButton";

import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClickPosts = () => {
    navigate("/posts_Reviews/Posts");
  };

  const handleClickReviews = () => {
    navigate("/posts_Reviews/Reviews");
  };

  return {
    columns: [
      { Header: "Usuario", accessor: "author", width: "45%", align: "left" },
      { Header: "Publicaciones", accessor: "posts", align: "center" },
      { Header: "Reseñas", accessor: "reviews", align: "center" },
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
        ),
      },
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
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
        posts: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickPosts}
          >
            Ver
          </MDButton>
        ),
        reviews: (
          <MDButton
            color="secondary"
            size="small"
            variant="text"
            onClick={handleClickReviews}
          >
            Ver
          </MDButton>
        ),
      },
    ],
  };
}
