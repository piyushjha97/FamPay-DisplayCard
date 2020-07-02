import React           from 'react';
import Mask            from './Mask';
import SpinWheelButton from './spinWheel';
import ImageCard       from './ImageCard';
import CentreCard      from './CentreCard';
import DisplayCard     from './DisplayCard';
import Logo            from './Logo.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    
    return (
      <div>
        <Logo />
        <Mask />
        <SpinWheelButton />
        <ImageCard />
        <CentreCard />
        <DisplayCard />
      </div>
    );
  }
}
export default  Home;
