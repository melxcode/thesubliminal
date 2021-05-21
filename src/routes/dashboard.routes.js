import { lazy } from "react";
import { Redirect } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
//
import { PATH_DASHBOARD } from "./paths";

// ----------------------------------------------------------------------

const DashboardRoutes = {
  path: PATH_DASHBOARD.root,
  layout: DashboardLayout,
  routes: [
    // GENERAL
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: PATH_DASHBOARD.general.branding,
      component: lazy(() => import("../views/branding")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.general.uiux,
      component: lazy(() => import("../views/uiux")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.general.dev,
      component: lazy(() => import("../views/dev")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.general.marketing,
      component: lazy(() => import("../views/marketing")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.root,
      component: () => <Redirect to={PATH_DASHBOARD.general.branding} />,
    },
    
    
    // APP
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: PATH_DASHBOARD.app.pageFour,
      component: lazy(() => import("../views/PageFour")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.app.pageFive,
      component: lazy(() => import("../views/PageFive")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.app.pageSix,
      component: lazy(() => import("../views/PageSix")),
    },
    {
      exact: true,
      path: PATH_DASHBOARD.app.root,
      component: () => <Redirect to={PATH_DASHBOARD.app.pageFour} />,
    },

    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default DashboardRoutes;
