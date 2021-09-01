// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Button, Box, Container, Typography } from "@material-ui/core";
// routes
import { useHistory } from "react-router-dom";
import { PATH_NFT } from "../../routes/paths";
import { varFadeInDown, varFadeInUp, MotionInView } from "../animate";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 456,
  margin: "auto",
  overflow: "hidden",
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up("md")]: {
    display: "flex",
    maxWidth: "100%",
    paddingBottom: 0,
    alignItems: "center",
  },
}));

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
  const history = useHistory();
  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            mb: { xs: 3, md: 0 },
          }}
        >
          <Box
            component="img"
            alt="rocket"
            src="/static/home/rocket.png"
            sx={{
              maxWidth: 460,
              transform: {
                xs: "translateX(-18%)",
                md: "translateX(0)",
              },
            }}
          />
        </MotionInView>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <MotionInView
            variants={varFadeInDown}
            sx={{ color: "common.white", mb: 5 }}
          >
            <Typography variant="h2">
              Crypto Art Experience
              <br /> Digital Gallery
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                history.push(PATH_NFT.market);
              }}
              sx={{
                boxShadow: (theme) => theme.customShadows.z8,
                color: (theme) =>
                  theme.palette.getContrastText(theme.palette.common.white),
                bgcolor: "common.white",
                "&:hover": { bgcolor: "grey.300" },
              }}
            >
              Purchase CryptoArt
            </Button>
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  );
}
