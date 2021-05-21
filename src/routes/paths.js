// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/services";

// ----------------------------------------------------------------------

export const PATH_HOME = {
  components: "/components",
  cloud: "https://www.instagram.com/thesubliminalagency/",
  purchase: "/servives",
  dashboard: ROOTS_DASHBOARD,
  contact: "/contact",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    dev: path(ROOTS_DASHBOARD, "/dev"),
    uiux: path(ROOTS_DASHBOARD, "/uiux"),
    branding: path(ROOTS_DASHBOARD, "/branding"),
    marketing: path(ROOTS_DASHBOARD, "/marketing"),

  },
  app: {
    root: path(ROOTS_DASHBOARD, "/drop"),
    pageFour: path(ROOTS_DASHBOARD, "/drop/four"),
    pageFive: path(ROOTS_DASHBOARD, "/drop/five"),
    pageSix: path(ROOTS_DASHBOARD, "/drop/six"),
  },
};
