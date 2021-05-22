// material
import { Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import PhotoContainer from "../components/photocontainer";
// ----------------------------------------------------------------------

export default function uiux() {
  const fotos = [

    "https://fotos.subefotos.com/1f75e613dc05d35fead67f340d058e86o.jpg",
    "https://fotos.subefotos.com/5174413a42f0769a03cf03eb7cdc9367o.png",
  ];
  
  return (
    <Page title="UIUX | Design-User experience">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph sx={{
          color:"#5842f4"
        }}>
          UIUX ✦ DESIGN - USER INTERFACE 
        </Typography>
        

         <Typography gutterBottom>
        UX DESIGNERS: They determine the structure of the interface and the functionality.
         How it’s organized and how all the parts relate to one another.
          In short, they design how the interface works. If it works well and 
          feels seamless, the user will have a good experience. But if navigation 
          is complicated or unintuitive, then a lousy user experience is likely. 
          UX designers work to avoid the second scenario.
          User experience is determined by how easy or difficult it is to interact
         with the user interface elements that the UI designers have created.
        </Typography>

        <Typography gutterBottom>
        UI DESIGNERS: They decide what the application is going to look like.
         They have to choose color schemes and button shapes — the width of lines
          and the fonts used for text. UI designers create the look and feel of 
          an application’s user interface. They’re concerned with aesthetics. 
          It’s up to them to make sure the application’s interface is attractive, 
          visually-stimulating and themed appropriately to match the purpose
           and/or personality of the app. And they need to make sure every single
            visual element feels united, both aesthetically, and in purpose.
        </Typography>
        <Typography gutterBottom sx={{color:"#5842f4"}} >     
        🌈 📲💻⭐️ UI design and UX design involve very different skill sets, but they are integral
         to each other’s success........... A beautiful design and a brilliant user experience.
         </Typography>
        <PhotoContainer photos={fotos} />
      </Container>
    </Page>
  );
}
