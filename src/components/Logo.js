// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function Logo({ ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="https://fotos.subefotos.com/4a1a035ae7f9d4cdf22f480e33f73913o.png"
      height={70}
      {...other}
    />
  );
}
