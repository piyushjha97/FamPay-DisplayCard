import React            from 'react';
import { withStyles}    from '@material-ui/core/styles';
import Card             from '@material-ui/core/Card';
import CardActionArea   from '@material-ui/core/CardActionArea';
import CardContent      from '@material-ui/core/CardContent';
import CardMedia        from '@material-ui/core/CardMedia';
import { Typography }   from '@material-ui/core';


const styles = theme => ({
    "cardaction": {
      width:'100%',
      marginBottom:'20px',
    },
    "cardcontent": {
        background: '#FBAF03',
        borderRadius:'12px',
        display:'flex',   
    },
    "texts": {
        display:'inline',
        paddingLeft:'15px'
    },
    "titleStyle": {
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:'14px',
        lineHeight:'16px',
        color:'#000000',
        paddingBottom:'5px'
    },
    "nameStyle": {
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:'14px',
        lineHeight:'16px',
        color:' rgba(27, 27, 30, 0.725524)'
    }
})


class DisplayCard extends React.Component {
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
                    />
                    <CardContent className = {classes.cardcontent} >
                      <img src = {this.state.url} width = "10%" />
                      <div className = {classes.texts}>
                      <Typography className = {classes.titleStyle}>Small display card</Typography>
                      <Typography className = {classes.nameStyle}> Arya Start</Typography>
                      </div>
                    </CardContent>
                </CardActionArea>
            </Card>
          </div>
        );
      }
    }
    export default withStyles(styles)(DisplayCard);