import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import flashFill from "@iconify/icons-eva/flash-fill";
import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Button, Box, Link, Container, Typography } from "@material-ui/core";
// routes
import { PATH_DASHBOARD, PATH_HOME } from "../../routes/paths";

//
import {
  varFadeIn,
  varWrapEnter,
  varFadeInUp,
  varFadeInRight,
} from "../animate";
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#050405",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: "auto",
  textAlign: "center",
  position: "relative",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    textAlign: "left",
  },
}));

const HeroGifStyle = styled(motion.img)({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,

  width: "100%",
  height: "100%",
  objectFit: "cover",

  margin: "auto",
  position: "absolute",
});

const HeroImgStyle = styled(motion.video)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,

  width: "100%",
  objectFit: "cover",

  margin: "auto",
  position: "absolute",
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    height: "100vh",
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {window.screen.width < 600 ? (
          <>
            <HeroGifStyle
              alt="overlay"
              src="https://i.ibb.co/QcH06j0/hero.gif"
              variants={varFadeIn}
            />

            <HeroImgStyle
              alt="hero"
              src="/static/home/hero.png"
              variants={varFadeInUp}
            />
          </>
        ) : (
          <HeroImgStyle autoPlay loop>
            <source src="/hero.mp4"></source>
          </HeroImgStyle>
        )}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h3" sx={{ color: "common.white", mt: 15 }}>
                Start a <br />
                New Project <br /> with
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: "primary.main" }}
                >
                  &nbsp;Subliminal
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                variant="subtitle2"
                sx={{ py: 5, color: "common.white" }}
              >
                Welcome to the starting point for your best brand version ©
                helps you with Brand concept design,Logo, Identity, Website,
                App, UIUX, Packaging, Billboards,Marketing, Social media and
                others exclusive services.
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              variants={varFadeInRight}
              sx={{
                mb: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="img"
                alt="sketch icon"
                src="/static/icons/ic_sketch.svg"
                sx={{ mr: 1, width: 20, height: 20 }}
              />
              <Link
                color="inherit"
                underline="always"
                href={PATH_HOME.cloud}
                target="_blank"
                sx={{ color: "common.white" }}
              >
                Check our work here
              </Link>
            </Box>

            <motion.div variants={varFadeInRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Icon icon={flashFill} width={20} height={20} />}
              >
                Make it happen
              </Button>
            </motion.div>

            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                "& > :not(:last-of-type)": { mr: 1.5 },
              }}
            ></Box>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  );
}
