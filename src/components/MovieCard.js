import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard(props) {

    const checkMovie = () => {
        if (props.type === "Movie")
            return true
        else 
            return false
    }

    const imageUrl = (checkMovie())? "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=800" : "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <Card sx={{ maxWidth: 245, height:425 }} md={{margin: 0}} id={props.show_id}>
      <CardMedia
        sx={{ height: 240 }}
        image = {imageUrl}
        title="popcorn"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontSize:"22px"}}>
          {props.title}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{fontWeight:'500'}}>
          {props.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.release_year} | {props.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Watch</Button>
      </CardActions>
    </Card>
  )
}
