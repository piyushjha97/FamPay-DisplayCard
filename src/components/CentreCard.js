import React                         from 'react';
import {withStyles}                  from '@material-ui/core/styles';
import Card                          from '@material-ui/core/Card';
import CardActionArea                from '@material-ui/core/CardActionArea';
import CardContent                   from '@material-ui/core/CardContent';
import CardMedia                     from '@material-ui/core/CardMedia';
import { Typography }                from '@material-ui/core';
import Button                        from '@material-ui/core/Button';


const styles = theme => ({
    "cardaction": {
      width:'100%',
      textAlign:'center',
      marginTop:'20px',
      marginBottom:'20px',
    },
    "cardcontent": {
        background: 'linear-gradient(344.71deg, #FBAF03 3.44%, #FFD428 86.36%)',
        borderRadius:'16px'
         
    },
    "nameText" : {
      fontFamily: 'Roboto',
      fontSize:'14px',
      fontStyle:'normal',
      fontWeight:'normal',
      textAlign: 'center',
      lineHeight:'16px',
      color:'rgba(27,27,30,0.7)'
    },
    "cardName" : {
      fontFamily: 'Roboto',
      fontSize:'16px',
      fontStyle:'normal',
      fontWeight:'600',
      textAlign: 'center',
      lineHeight:'19px',
      color:'#000000'

    },
    "button" : {
      margin:'15px',
      background:'#000000',
      color:'#FFFFFF'
    }
})


class CentreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          url:"https://westeros-staging.s3.amazonaws.com/media/images/generic/13c07b132b69446cb25f05170c8c00bd.png"
        };
      }
    
    
      componentDidMount() {} 
    
    
      render() {
        const { classes } = this.props;
        

        return (

          
          <div className = {classes.abc}>
              <Card className={classes.root}>  
                <CardActionArea className = {classes.cardaction}>
                    <CardMedia
                    component="img"
                    //image
                    />
                    <CardContent className = {classes.cardcontent} >
                      <div>
                        <img  src = {this.state.url} width = "30%"/>
                        <Typography className = {classes.nameText}>Aria Stark</Typography>
                        <Typography className = {classes.cardName}>Center Card</Typography>
                      </div>

                      <div className = {classes.actionButton}>
                        <Button variant="contained"  className = {classes.button}>
                          Action 1
                          </Button>
                          <Button variant="contained" className = {classes.button}>
                          Action 2
                          </Button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
          </div>
        );
      }
    }
    export default withStyles(styles)(CentreCard);