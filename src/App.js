import React      from 'react';
import Media      from 'react-media';
import Routes     from './Routes';
import Warning    from './components/Warning';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      img_url:"https://westeros-staging.s3.amazonaws.com/media/images/generic/2a650f966e1f4a2e81bdbbb118fb2e73.png"
    };
  }


  componentDidMount() {
    fetch("https://run.mocky.io/v3/9fc6c82f-3fde-431d-b1e5-0a1982928cb4")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState ({
            data: result
          });
          //console.log(result);
        },
        (error) => {
          console.log("err");
        }
        
      )
  }


  render() {

    return (
      <div className = "abc">
        <Media query = "(min-width:455px">
          {matches => {
            return matches ? <Warning /> : <Routes />;
          }}
        </Media>
        
      </div>
    );
  }
}

export default App;
