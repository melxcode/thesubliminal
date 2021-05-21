import { Container, Typography, } from '@material-ui/core';
// components
import Page from '../components/Page';
import PhotoContainer from "../components/photocontainer"


// ----------------------------------------------------------------------

export default function Marketing() {
  const fotos = [
"https://fotos.subefotos.com/3f391f4b0c38e8708baa49a7d95dfc4co.png",
"https://fotos.subefotos.com/0dcc9d96e1b3af7b5e25a36483a20378o.png",
"https://fotos.subefotos.com/aa16377f51f132073e324fce5678033co.png",
"https://fotos.subefotos.com/fb5989f87fc4d2fef99e16b394cc7833o.png",


      ]
  return (
    <Page title="Marketing | Social media">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph sx={{
          color:"#5842f4"
        }}>
          TALENT ✦ SOCIAL MEDIA ✦ CONTENT
        </Typography>
        <Typography gutterBottom>
        More than 4.5 billion people now use the internet, while social media users have passed 
        the 3.8 billion mark. Nearly 60 percent of the world’s population is already online, and 
        the latest trends suggest that more than half of the world’s total population will use 
        social media by the middle of this year.

          </Typography>
          
          <Typography gutterBottom>
          Your social media platforms are one of the best ways to connect with your target audience.
           As a powerful tool for establishing genuine relationships with your customer base, social media 
           gives you a direct pathway to have conversations, get feedback, and push new leads to your website.
            However, this is all fueled by strong content creation.
        </Typography>

        <Typography gutterBottom>
          
🎀Kit media

//Content design & strategy
//Quality (Post + stories)
//Community growth
//Brand solidification
//Visual Identity
        </Typography>
      <PhotoContainer photos={fotos}/>

      </Container>
    </Page>
  );
}
