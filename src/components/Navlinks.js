import React from 'react';
import '../index.css';
class Navlinks extends React.Component {
    render() { 
        return (
    <ul className="navlinks">
          <li><a href="#">NFT</a></li>
          <li><a href="#meta">METAVERSE</a></li>
          <li><a href="#web">WEB 3.0</a></li>
          <li><a href="#ido">ICO/STO/IDO</a></li>
          <li><a href="#">CRYPTO</a></li>
          <li><a href="#blockchain">BLOCKCHAIN</a></li>
          <li><a href="#">OUR SERVICES</a></li>
          <li><a className="contact" href="#"><i className="fa-solid fa-phone fa-shake" style={{color: '#ffffff'}} />CONTACT</a></li>
        </ul>
        );
    }
}
 
export default Navlinks;