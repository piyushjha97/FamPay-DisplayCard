import React                 from 'react';
import { makeStyles}         from '@material-ui/core/styles';
import Card                  from '@material-ui/core/Card';
import CardActionArea        from '@material-ui/core/CardActionArea';
import CardContent           from '@material-ui/core/CardContent';
import CardMedia             from '@material-ui/core/CardMedia';
import Button                from '@material-ui/core/Button';
import IconButton            from '@material-ui/core/IconButton';
import Typography            from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CancelIcon            from '@material-ui/icons/Cancel';
import history               from '../history';
 



const useStyles = makeStyles((theme) => ({

  card1: {
      display:'flex',
      background:'#ffffff',
      margin:'10px',
      borderRadius:'12px'
  },
  root: {
     maxWidth:'300',  
     marginLeft:'80px',
     paddingLeft:'0px' 
  },
  cardcontent:
  {
      padding:'0'
     
    
  },
  sideButton: {
     // display:'none'

  },
  bellButton: {
      display:'inline',
      fontSize:'8px',
      backgroundColor:'#F7F6F3',
      borderRadius:'12px',
      height:'79px',
      width:'52px',
      top:'20px',
      left:'25%',
      color:'#000000',
     
  },
  crossButton: {
    display:'inline',  
    width: '52px',
    height: '79px',
    left: '25%',
    top: '80px',
    background: '#F7F6F3',
    borderRadius: '12px',
    fontSize:'8px'
  },
  icon: {
    color:'#ffc43b',
    padding:'2px'
  },
  text1: {
      position:'absolute',
      left:'3.5%',
      top:'35%',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '25px',
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
    fontSize: '25px',
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
      top:'80%',
      left:'25%',
      color:'#ffffff',
    right:'-40%'
  }
}));


  

export default function ClickedMask() {

   

  const classes = useStyles();
  const url = "https://westeros-staging.s3.amazonaws.com/media/images/generic/2a650f966e1f4a2e81bdbbb118fb2e73.png";
   
  return (
     
    <div className = {classes.card1} >
        <div className = {classes.sideButton} >
            <Button color = "inherit" className = {classes.bellButton}>
                <IconButton className = {classes.icon}>
                  <NotificationsNoneIcon fontSize="large" className = {classes.icon}/>
                </IconButton>
                remind later
            </Button>

            <Button color = "inherit" className = {classes.crossButton}>
                <IconButton className = {classes.icon}>
                  <CancelIcon fontSize="large"/>
                </IconButton>
                dismiss now
            </Button>
        </div>
        
        <Card className={classes.root} onClick = {() => history.push('/')}>  
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

 
