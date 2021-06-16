// material
import { Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import PhotoContainer from "../components/photocontainer";
import { brandingUrls } from "../constants/URLS";

// ----------------------------------------------------------------------

export default function branding() {
  return (
    <Page title="BRANDING | Graphic Design">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          paragraph
          sx={{
            color: "#5842f4",
          }}
        >
          BRANDING ✦ Concept Design
        </Typography>
        <Typography gutterBottom>
          A brand concept is all about how a brand makes you feel, which becomes
          the base to build an entire brand and marketing strategy.
        </Typography>

        <Typography gutterBottom>
          PLAY START WITH AUTENTICITY The key to building a stellar brand
          concept is to be authentic—always. People are much more likely to
          trust you and buy into your brand if you are being real. Understanding
          the basics of who you are and exactly what your brand offering is will
          build a bond between you and your audience.. VOICE: Your voice is how
          your brand’s personality comes to life with the words you use to
          communicate with your audience. Use your voice guide as the foundation
          for all of your internal and external brand communication.
        </Typography>

        <Typography gutterBottom>
          YOUR BRAND CONCEPT should contain all of the feelings, ideas and goals
          of your company or organization. Consider testing it with a segment of
          your target audience to see how they respond and revise it based on
          their feedback.
        </Typography>
        <Typography gutterBottom sx={{ color: "#5842f4" }}>
          🚀Once you have a solid concept, you can start to build a //Logo //
          Corporative identity // Billboards // Packaging // and More!
        </Typography>

        <PhotoContainer photos={brandingUrls} />
      </Container>
    </Page>
  );
}
