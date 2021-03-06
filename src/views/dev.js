// material
import { Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import PhotoContainer from "../components/photocontainer";
import { devUrls } from "../constants/URLS";

// ----------------------------------------------------------------------

export default function dev() {
  return (
    <Page title="DEVELOPMENT | Web-App">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          paragraph
          sx={{
            color: "#5842f4",
          }}
        >
          DEVELOPMENT ✦ WEB-APP
        </Typography>
        <Typography gutterBottom>
          WEBSITE DEVELOPMENT/ E-COMMERCE <p></p>
          One of the major advantages of owning a website is that it is
          accessible to anyone, anywhere, anytime. Even during non-business
          hours, customers are able access your online store- website and avail
          your services or get the information they need, which is one of the
          key elements in the importance of a website in business.
        </Typography>

        <Typography gutterBottom>
          is also important because it helps to establish your business. In
          fact, customers today expect serious business owners to have an online
          presence. A well designed, informative and updated website will add
          credibility to your business and strengthen your brand.
        </Typography>
        <Typography gutterBottom sx={{ color: "#5842f4" }}>
          WEB DEVELOPMENT covers a massive range of solutions, most of which are
          customized to the client's needs. Depending on the project's
          requirements, they can include solutions like web application
          development, cybersecurity, testing, maintenance, consultancy, and
          even UI/UX design.
        </Typography>

        <Typography gutterBottom>
          APP DEVELOPMENT <p></p> Applications make a vital part of any business
          mobile strategy. Besides communicating with clients, an app allows
          business owners to understand the demographics of its customers. This
          is important as it enables businesses to engage better with their
          customers and provide services that meet the needs of the customers.
          via In-app purchases, ads, promotions, and notifications sent to
          customers' phone via mobile apps. A Viable Marketing Tool.
        </Typography>

        <Typography gutterBottom sx={{ color: "#5842f4" }}>
          WHAT ARE THE BENEFITS OF MOBILE APP FOR BUSINESS? //Mobile apps aid
          promotion and offers great support. //Value addition through
          rewards/loyalty program. //Unlock the power of better connection with
          customers. //Driving High Engagement Levels.
        </Typography>
        <PhotoContainer photos={devUrls} />
      </Container>
    </Page>
  );
}
