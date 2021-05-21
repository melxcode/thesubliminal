import { lazy } from "react";
import { Redirect } from "react-router-dom";
// layouts
import HomeLayout from "../layouts/home";
import { PATH_HOME } from "./paths";

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: "*",
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: "/",
      component: lazy(() => import("../views/LandingPage")),
    },
    {
      exact: true,
      path: PATH_HOME.contact,
      component: lazy(() => import("../views/Contact")),
    },
    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default HomeRoutes;
