import React                  from 'react';
import ClickedMask            from './clickedMask';
import SpinWheelButton        from './spinWheel';
import ImageCard              from './ImageCard';
import CentreCard             from './CentreCard';
import DisplayCard            from './DisplayCard';
import Logo                   from './Logo.js'

 


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    
    return (
      <div className = "abc">
        <Logo />
        <ClickedMask />
        <SpinWheelButton />
        <ImageCard />
        <CentreCard />
        <DisplayCard />
      </div>
    );
  }
}
export default Home;
