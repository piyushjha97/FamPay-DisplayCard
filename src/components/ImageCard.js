import React                from 'react';
import { makeStyles}      from '@material-ui/core/styles';
import Card                 from '@material-ui/core/Card';
import CardActionArea       from '@material-ui/core/CardActionArea';
import CardContent          from '@material-ui/core/CardContent';
import CardMedia            from '@material-ui/core/CardMedia';
import ButtonBase           from '@material-ui/core/ButtonBase';
import history              from '../history';
 



const useStyles = makeStyles((theme) => ({
 
  card1: {
      display:'flex'
  },
  root: {
     backgroundColor: '#E5E5E5', 
     maxWidth: '100%'
  },
  cardcontent:
  {
      padding:'0'
    
  }
}));


  

export default function ImageCard() {


  const classes = useStyles();
  const url = "https://westeros-staging.s3.amazonaws.com/media/images/generic/5cb0d958af964354a728dd5c04537e1d.png";

  return (
    <div className = {classes.card1}>
        
        <ButtonBase onClick={() => history.push('/next')}>
            <Card className={classes.root}>  
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={url}
                    />
                    <CardContent className = {classes.cardcontent}>
                 
                    </CardContent>
                </CardActionArea>
            </Card>
        </ButtonBase>
    </div>
  );
}

 
