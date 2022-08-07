import * as React from 'react';
import Card from '@mui/material/Card';
import { Rating } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Movie = (props) => {
  return (
    <div>
        <Card sx={{ minWidth: 275 }}  style={{margin:'30px 30px'}}>
      <CardContent>
        <Typography variant="h5" component="div">
        {props.name}
        </Typography>
        <Rating name="half-rating-read" defaultValue={props.ratings} precision={0.5} readOnly />
        <Typography variant="body2">
            {props.releaseDate}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Movie