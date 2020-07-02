import React, {useState}     from 'react';
import { makeStyles}         from '@material-ui/core/styles';
import Card                  from '@material-ui/core/Card';
import CardActionArea        from '@material-ui/core/CardActionArea';
import CardContent           from '@material-ui/core/CardContent';
import CardMedia             from '@material-ui/core/CardMedia';
import Button                from '@material-ui/core/Button';
import Typography            from '@material-ui/core/Typography';
import history               from '../history';
 
 



const useStyles = makeStyles((theme) => ({

  root: {
     maxWidth:'300',  
     backgroundColor: '#E5E5E5',
     padding:'10px'
  },
  cardcontent:
  {
      padding:'0',
  },
  text1: {
      position:'absolute',
      left:'3.5%',
      top:'35%',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '40px',
      lineHeight: '35px',
      color: '#FBAF03'
  },
  text2: {
    position:'absolute',
    left:'3.5%',
    top:'50%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '40px',
    lineHeight: '35px',
    color: '#ffffff'
  },
  para: {
    position: 'absolute',
    width: '251px',
    height: '36px',
    left: '3.5%',
    top: '60%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#FFFFFF'
  },
  button: {
      position:'absolute',
      backgroundColor:'black',
      top:'78%',
      left:'3.5%',
      color:'#ffffff'
  }
}));


  

export default function Mask() {

  const classes = useStyles();
  const url = "https://westeros-staging.s3.amazonaws.com/media/images/generic/2a650f966e1f4a2e81bdbbb118fb2e73.png"; 

  return (

    <div className = {classes.card1}>      
        <Card className={classes.root} onClick = {() => history.push('/clicked')}>  
            <CardActionArea>
                <CardMedia
                component="img"
                image={url}
                />
                <CardContent className = {classes.cardcontent} >
                    <Typography gutterBottom variant="h5" component="h2" className = {classes.text1}>
                        Big display card
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2" className = {classes.text2}>
                        with action
                    </Typography>

                    <div className = {classes.para}>
                        <p>This is a sample text for the subtitle that you can add to contextual cards.</p>
                    </div>

                    <Button variant="contained" color = "default" className = {classes.button}>
                    Action
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}

 
