import { lazy } from "react";
import { Redirect } from "react-router-dom";
// layouts
import NftLayout from "../layouts/dashboard";
import { PATH_NFT } from "./paths";

const NftRoutes = {
  path: PATH_NFT.root,
  layout: NftLayout,
  routes: [
    {
      exact: true,
      path: PATH_NFT.market,
      component: lazy(() => import("../views/Market")),
    },
    {
      exact: true,
      path: PATH_NFT.root,
      component: () => <Redirect to={PATH_NFT.market} />,
    },
    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default NftRoutes;
