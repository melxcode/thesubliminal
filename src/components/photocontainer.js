import React from "react"
import { Grid } from '@material-ui/core';

const PhotoContainer = ({photos})=>{


    return(
        <Grid
        style={{
          display:"flex",
          marginTop:"50px",
          flexDirection:"column"
    
        }}
        >
          {photos.map(url=>(
            <img  alt="example" src={url}/>
          ))}
        </Grid>
    )
}

export default PhotoContainer