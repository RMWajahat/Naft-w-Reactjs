import React from 'react';
import logo from '../logoNAFTW.png';
class Foooter extends React.Component {
    state = {  } 
    render() { 
        return (
            /*---------------------FOOTER--------------*/
      <section className="footer">
      <a href="#home"><img src={logo} alt="" /></a>
      <ul className="navlinks foot">
        <li><a href="#">NFT</a></li>
        <li><a href="#meta">METAVERSE</a></li>
        <li><a href="#web">WEB 3.0</a></li>
        <li><a href="#ido">ICO/STO/IDO</a></li>
        <li><a href="#">CRYPTO</a></li>
        <li><a href="#blockchain">BLOCKCHAIN</a></li>
        <li><a href="#">OUR SERVICES</a></li>
      </ul>
      <small>©NAFT-W.  ® All Rights Reserved. <br /><br />
        <span style={{alignSelf: 'flex-start'}}>Developer ⤏ Mr. Muhammad Wajahat Hussain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          UI/UX ⤏ Mr. Khawaja Ahtisham</span>
      </small>
    </section>
        );
    }
}
 
export default Foooter;