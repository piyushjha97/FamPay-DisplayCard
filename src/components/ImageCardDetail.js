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
import ImageCard              from './ImageCard';




const styles = theme => ({
    
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
    "moneycards":{
        display:'flex',
        marginTop:'10px',
        justifyContent:'center',
        background:'#F7F6F3'
    },
    "moneyCard":{
        borderRadius:'6px',
        margin:'20px',
    },
    "moneyone":{
        fontSize:'20px',
        lineHeight:'24px',
        textAlign:'center'
    },
    "text1":{
        fontSize:'12px',
        lineHeight:'12px',
        textAlign:'center',
        margin:'5px'
    },
    "ruleHeading":{
         padding:'15px',
        fontFamily:'Metropolis',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:'18px',
        lineHeight:'18px',
        color:'#000000'
    },

    "rewardCard" :{
        margin:'10px',
        background:'#F7F6F3'
    },
    "ruleStyle":{
        fontFamily:'Metropolis',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'15px',
        lineHeight:'18px',
        color:'#000000'
    }
})


class ImageCardDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url:"https://westeros-staging.s3.amazonaws.com/media/images/generic/13c07b132b69446cb25f05170c8c00bd.png",

            rules:["You must maintain a streak for 10 days 🔥",
                  "To maintain the streak, you must add 💸 to your savings once everyday",
                  "Minimum savings to be added everyday must be ₹10 or above 💰",
                  "You can add a maximum of ₹200 everyday 🤞🏻",
                  "The streak will break if you exit the challenge or do not add the minimum amount required 😵",
                  "You lose if you break the savings streak 😔"
                ]
        };
      }
    
      componentDidMount() {} 
    
    
      render() {
        const { classes } = this.props;
        const rules= this.state.rules;
        return (
        <div>
             <Card  onClick={() => history.push('/')}>  
                <CardActionArea>
                    <CardMedia
                    component="img"
                    />
                    <CardContent className = {classes.cardcontent} >
                            <IconButton color = "inherit"  >
                                <ChevronLeftIcon fontSize="large"/>
                            </IconButton>
                            <Typography className  = {classes.textClass}>Savings Challenge</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <ImageCard /> 

        <div className = {classes.moneycards}>
            <Card className = {classes.moneyCard}>
                <CardContent >
                <Typography className={classes.moneyone}>₹10💰</Typography>
                <Typography className = {classes.text1}>Minimum daily savings</Typography>
                </CardContent>
            </Card>
            <Card className = {classes.moneyCard}>
                <CardContent>
                <Typography className={classes.moneyone}>10 days🔥</Typography>
                <Typography className = {classes.text1}>Streak to maintain</Typography>
                </CardContent>
            </Card>
        </div>

            <Card className = {classes.rewardCard}>
                <CardContent>
                <Typography className={classes.moneyone}>Upto ₹2000💸</Typography>
                <Typography className = {classes.text1}>Instant rewards for successful10-Day streak</Typography>
                </CardContent>
            </Card>

            <Typography className = {classes.ruleHeading}>Remember the rules 🗒</Typography>
            <Card className = {classes.rewardCard}>
                <CardContent>
                   <ul className = {classes.ruleStyle}>
                        {rules.map(rule => (
                            <li>
                            {rule}
                            </li>
                        ))}
                   </ul>
                </CardContent>
            </Card>

        </div>
        );
      }
    }
    export default withStyles(styles)(ImageCardDetail);


   


 