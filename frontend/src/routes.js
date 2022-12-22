import Auth from "layouts/auth";
import Users from "layouts/users";
import News from "layouts/news";
import Reports from "layouts/reports";
import SignIn from "layouts/login";
import Posts_Reviews from "layouts/posts-reviews";
import Publish_News from "layouts/news/views/publishNews";
import Edit_News from "layouts/news/views/editNews";
import News_Comments from "layouts/news/views/newsComments";
import Stock from "layouts/stock";
import Inventory from "layouts/stock/views/inventory";
import Posts from "layouts/posts-reviews/views/posts";
import Reviews from "layouts/posts-reviews/views/reviews";
import Posts_Comments from "layouts/posts-reviews/views/postsComments";
import Own_Reports from "layouts/reports/views/ownReports";

import Icon from "@mui/material/Icon";

const routes = [
  {
    route: "/sign-in",
    component: <SignIn />,
  },
  {
    route: "/news/publish_news",
    component: <Publish_News />,
  },
  {
    route: "/news/edit_news/:id",
    component: <Edit_News />,
  },
  {
    route: "/news/comments/:id",
    component: <News_Comments />,
  },
  {
    route: "/stock/:id",
    component: <Inventory />,
  },
  {
    route: "/posts_Reviews/Posts/:id",
    component: <Posts />,
  },
  {
    route: "/posts_Reviews/Reviews/:id",
    component: <Reviews />,
  },
  {
    route: "/posts_Reviews/Posts_Comments/:id",
    component: <Posts_Comments />,
  },
  {
    route: "/reports/own_reports",
    component: <Own_Reports />,
  },
  {
    type: "collapse",
    name: "Autenticación",
    key: "auth",
    icon: <Icon fontSize="small">check</Icon>,
    route: "/auth",
    component: <Auth />,
  },
  {
    type: "collapse",
    name: "Usuarios",
    key: "users",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "collapse",
    name: "Noticias",
    key: "news",
    icon: <Icon fontSize="small">newspaper</Icon>,
    route: "/news",
    component: <News />,
  },
  {
    type: "collapse",
    name: "Publicaciones y Reseñas",
    key: "posts_Reviews",
    icon: <Icon fontSize="small">comment</Icon>,
    route: "/posts_Reviews",
    component: <Posts_Reviews />,
  },
  {
    type: "collapse",
    name: "Inventarios",
    key: "stock",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "/stock",
    component: <Stock />,
  },
  {
    type: "collapse",
    name: "Reportes",
    key: "reports",
    icon: <Icon fontSize="small">report</Icon>,
    route: "/reports",
    component: <Reports />,
  },
];

export default routes;
