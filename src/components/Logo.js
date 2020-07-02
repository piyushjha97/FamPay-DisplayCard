import React                from 'react';
import { makeStyles, }      from '@material-ui/core/styles';
 
 

const useStyles = makeStyles((theme) => ({

    cardaction: {
        width:'30%',
        border:'none'
    } ,
    logo: {
      width:'40%',
      marginLeft:'30%'
    }
  
  }));


export default function Logo() {
    const classes = useStyles();
    const img_url = "https://scontent.fbir1-1.fna.fbcdn.net/v/t1.0-9/67177564_505698696869101_2988063465710551040_o.png?_nc_cat=110&_nc_sid=6e5ad9&_nc_ohc=B27LVeZow4oAX_p8c9U&_nc_ht=scontent.fbir1-1.fna&oh=14ef9371d3ef12d8f17a37c808369a43&oe=5F22E0B5"


    return ( 
  <div>    
   <img src = {img_url} className = {classes.logo} /> 
 </div>
    );
}





