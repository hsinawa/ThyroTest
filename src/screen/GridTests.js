import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './grid.css'

  export default function GridTests({i}) {
    return (
      <Card raised
      sx={{
        maxWidth: 350,
        margin: "0 auto",
        padding: "0.1em",
        borderRadius:'15px'
      }}
      id='card'
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={i.imageurl}
            alt={"alt"}
            title={"titleasdasdsada"}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {i.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {i.about}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            ₹{i.price}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    );
  }



