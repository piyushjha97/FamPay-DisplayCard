import React                  from 'react';
import {withStyles}           from '@material-ui/core/styles';
import Card                   from '@material-ui/core/Card';
import CardActionArea         from '@material-ui/core/CardActionArea';
import CardContent            from '@material-ui/core/CardContent';
import CardMedia              from '@material-ui/core/CardMedia';
import { Typography }         from '@material-ui/core';
import IconButton             from '@material-ui/core/IconButton';
import ChevronLeftIcon        from '@material-ui/icons/ChevronLeft';
import history                from '../history';


const styles = theme => ({
    "card1":{

        background:'#E5E5E5'
    },
    
    "cardaction": {
      width:'100%'
    },
    "cardcontent": {
        alignItems:'center',
        display:'flex'   
    },
    "textClass": {
        fontFamily: 'Metropolis',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '14px',
        color: '#000000',
        mixBlendMode:'normal'
    },
    "wheelSection":{
        textAlign:'center',
        fontSize:'40px',
        color:'#000000',
        fontWeight:'500',
        padding:'20px'

    },
    "rewardCard" : {
        margin:'10px',
        borderRadius:'10px'

    },
    "text1": {
        width:'215px',
        height:'48px',
        left:'73px',
        top:'474px',
        fontFamily: 'Metropolis',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#000000',
        textAlign:'center',
        paddingLeft:'20%'

    },
    "text2" :{
        width:'267px',
        height:'36px',
        left:'43px',
        top:'528px',
        fontFamily: 'Metropolis',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '18px',
        color: 'rgba(0,0,0,0.58)',
        textAlign:'center',
        paddingLeft:'15%'

    },
    "quesText" : {
        width:'267px',
        height:'14px',
        left:'-0.57%',
        top:'calc(50% - 14px/2 - 1.5px)',
        fontFamily: 'Metropolis',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '14px',
        color: '#000000',
        textAlign:'center',
        paddingLeft:'15%',
        paddingBottom:'5%'

    }
})


class ImageCardDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url:"https://westeros-staging.s3.amazonaws.com/media/images/generic/13c07b132b69446cb25f05170c8c00bd.png",

             
        };
      }
    
      componentDidMount() {} 
    
    
      render() {

        const { classes } = this.props;
        return (
        <div className  = {classes.card1}>
            <Card  onClick={() => history.push('/')}>  
                <CardActionArea>
                    <CardMedia
                    component="img"
                    />
                    <CardContent className = {classes.cardcontent} >
                            <IconButton color = "inherit"  >
                                <ChevronLeftIcon fontSize="large"/>
                            </IconButton>
                            <Typography className  = {classes.textClass}>Your rewards</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Typography className = {classes.wheelSection}> wheel section</Typography>

            <Card className = {classes.rewardCard}>
                <CardContent>
                <Typography className={classes.text1}>Spin the wheel now to{"\n"} get rewarded</Typography>
                <Typography className = {classes.text2}>Tap on Spin or rotate the wheel anti-clockwise and release to start spinning </Typography>
                </CardContent>
            </Card>
            <Typography className = {classes.quesText}>Have a question? Get help</Typography>  
        </div>
        );
      }
    }
    export default withStyles(styles)(ImageCardDetail);


   


 