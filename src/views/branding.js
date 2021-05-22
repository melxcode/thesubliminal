// material
import { Container, Typography, } from '@material-ui/core';
// components
import Page from '../components/Page';
import PhotoContainer from "../components/photocontainer"


// ----------------------------------------------------------------------

export default function branding() {
  const fotos = [
"https://fotos.subefotos.com/644906e25d9fae63d55191a906996346o.png",
"https://fotos.subefotos.com/c66a9d97de0a1c7d89240ee41de0df9bo.png",
"https://fotos.subefotos.com/252b60d97d3f0c4117501a90ad12d867o.png",
"https://fotos.subefotos.com/c41971d1728dda991653e00180eac077o.png",
"https://fotos.subefotos.com/aaac4e754f7b5b5ee47bb004004b86abo.png",
"https://fotos.subefotos.com/e179aa5a1358c3bb2f68af4514de1732o.png",
"https://fotos.subefotos.com/cfa73ad59b8010559949ec30b55f92f3o.png",
"https://fotos.subefotos.com/75aa60047b04fa2633ce6693f4aef943o.png",
"https://fotos.subefotos.com/1634399cd2b40856ec15977e6278bc4fo.png",
"https://fotos.subefotos.com/0932dbaf2658c672d18cb70a976b9b26o.png",


      ]
  return (
    <Page title="BRANDING | Graphic Design">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph sx={{
          color:"#5842f4"
        }}>
          BRANDING ✦ Concept Design 
        </Typography>
        <Typography gutterBottom>
          A brand concept is all about how a brand makes you feel, 
          which becomes the base to build an entire brand and marketing 
          strategy.
          </Typography>
          
          <Typography gutterBottom >
          PLAY START WITH AUTENTICITY  
                    The key to building a stellar 
          brand concept is to be authentic—always. People are much more likely
           to trust you and buy into your brand if you are being real. 
           Understanding the basics of who you are and exactly what your brand 
           offering is will build a bond between you and your audience.. 
          VOICE: Your voice is how your brand’s personality comes to life
           with the words you use to communicate with your audience.
           Use your voice guide as the foundation for all of your internal 
           and external brand communication.  
        </Typography>

        <Typography gutterBottom >     
            YOUR BRAND CONCEPT should contain all of the feelings, ideas and goals 
            of your company or organization. Consider testing it with a segment of your
            target audience to see how they respond and revise it based on their feedback.  
        </Typography>
        <Typography gutterBottom sx={{color:"#5842f4"}} >     
        🚀Once you have a solid concept, you can start to build a //Logo // Corporative identity 
        // Billboards // Packaging // and More! 
        </Typography>

      <PhotoContainer photos={fotos}/>

      </Container>
    </Page>
  );
}
