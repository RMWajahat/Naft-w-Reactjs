import React from 'react';
import logo from '../logoNAFTW.png';
import Navlinks from './Navlinks';
import Headerr from './Headerr';
class Navbar extends React.Component {
  spacemotion(){
    var y = window.scrollY;
    console.log(y);
  }
    render() { 
        return (
      <div className="nav" id="home">
      <nav className="headd" onScroll={this.spacemotion()}>
        <Navlinks></Navlinks>
        <Headerr></Headerr>
      </nav>
    </div>
        );
    }
}
 
export default Navbar;