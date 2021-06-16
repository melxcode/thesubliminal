// material
import { Box } from "@material-ui/core";
import { logo } from "../constants/URLS";

// ----------------------------------------------------------------------

export default function Logo({ ...other }) {
  return <Box component="img" alt={logo} src={logo} height={70} {...other} />;
}
