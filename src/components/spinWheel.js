import React                from 'react';
import { makeStyles, }      from '@material-ui/core/styles';
import Button               from '@material-ui/core/Button';
import IconButton           from '@material-ui/core/IconButton';
import Card                 from '@material-ui/core/Card';
import CardActionArea       from '@material-ui/core/CardActionArea';
import CardContent          from '@material-ui/core/CardContent';
import CardMedia            from '@material-ui/core/CardMedia';
import AccountBoxIcon       from '@material-ui/icons/AccountBox';
import ChevronRightIcon     from '@material-ui/icons/ChevronRight';
import history              from '../history';

 

const useStyles = makeStyles((theme) => ({

    cardaction: {
        width:'100%'
    },
    spinButton: {
      width:'100%',
      borderRadius:'6px',
      backgroundColor:'#ffffff',
      justifyContent:'start',
      fontWeight:'500',
      fontSize:'14px',
      lineHeight:'16px',
      fontFamily:'Roboto'
    },
    icon1 : {
         left:'0px',
         display:'inherit'   
    },
    icon2: {
        right:'-30%'
    }
  
  }));


export default function SpinWheelButton() {
    const classes = useStyles();

    return ( 
  <div>
      <Card className={classes.root} onClick={() => history.push('/wheelpage')}>  
        <CardActionArea className = {classes.cardaction}>
            <CardMedia
            component="img"
            />
            <CardContent className = {classes.cardcontent} >
              <Button variant = "contained" color="default" className = {classes.spinButton}>
                      <IconButton color = "inherit" className = {classes.icon1}>
                          <AccountBoxIcon fontSize="large" />
                      </IconButton>
                          Spin the wheel
                      <IconButton color = "inherit" className = {classes.icon2}>
                          <ChevronRightIcon fontSize="large"/>
                      </IconButton>
                </Button>
            </CardContent>
        </CardActionArea>
     </Card>
 </div>
    );
}





