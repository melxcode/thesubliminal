import React from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Link,
  Hidden,
  Container,
  Typography,
} from "@material-ui/core";
import Page from "../components/Page";
import CalendlyWidget from "../components/calendly";

import ContactForm from "../components/contact/ContactForm";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Contact | Bysubliminal">
      <HeaderStyle></HeaderStyle>

      <Hidden mdDown>
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 15 }}>
            Let your brand open the door to its best version.
          </Typography>
          <img
            alt="contact"
            src="/static/illustrations/illustration_login.svg"
          />
          <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 15 }}>
            Book a call to talk about your idea !
          </Typography>
        </SectionStyle>
      </Hidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Get started and feel
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Your brand power.
              </Typography>
            </Box>
            <Box
              component="img"
              src={`/static/icons/${"sub1"}.png`}
              sx={{ width: 32, height: 32 }}
            />
          </Box>
          <ContactForm />
          <Box sx={{ mt: 5 }}>
            <CalendlyWidget username="bysubliminal" duration="15mins" />
          </Box>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary" }}
          >
            By registering, you'll Contact Subliminal&nbsp;
            <Link underline="always" sx={{ color: "text.primary" }}>
              Team to exclusive services.
            </Link>
            &nbsp;Atention,&nbsp;
            <Link underline="always" sx={{ color: "text.primary" }}>
              Data secured
            </Link>
            .
          </Typography>

          <Hidden smUp>
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
              How can we help you?&nbsp;
              <Link to={"/"} component={RouterLink}>
                Email
              </Link>
            </Typography>
          </Hidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
