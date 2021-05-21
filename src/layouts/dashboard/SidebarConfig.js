// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: 22, height: 22 }}
  />
);

const ICONS = {
  page: getIcon('ic_page'),
  dashboard: getIcon('ic_dashboard'),
  code: getIcon('ic_code'),
  design: getIcon('ic_design'),
  sketch: getIcon('ic_m_sketch'),
  cora: getIcon('cora'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'BRANDING',
        href: PATH_DASHBOARD.general.branding,
        icon: ICONS.sketch
      },
      {
        title: 'UIUX DESIGN',
        href: PATH_DASHBOARD.general.uiux,
        icon: ICONS.design
      },
      {
        title: 'DEVELOPMENT',
        href: PATH_DASHBOARD.general.dev,
        icon: ICONS.code
      },
      {
        title: 'MARKETING',
        href: PATH_DASHBOARD.general.marketing,
        icon: ICONS.cora
      }
    ]
  },

  // APP
  // ----------------------------------------------------------------------
//  {
//    subheader: 'app',
//    items: [
 //     {
//        title: 'Drop',
//        href: PATH_DASHBOARD.app.root,
//        icon: ICONS.dashboard,
 //       items: [
 //         {
//            title: 'page Four',
//            href: PATH_DASHBOARD.app.pageFour
//          },
 //         {
  //          title: 'Page Five',
   //         href: PATH_DASHBOARD.app.pageFive
  //        },
  //        {
//            title: 'Page Six',
 //           href: PATH_DASHBOARD.app.pageSix
 //         }
  //      ]
 //     }
  //  ]
  //}
];

export default sidebarConfig;
