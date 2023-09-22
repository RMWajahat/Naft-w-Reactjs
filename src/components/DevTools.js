import React from 'react';
import Web from './Web';
import Ido from './Ido';
import Metta from './Metta';
class DevTools extends React.Component {
    state = {  } 
    render() { 
        return (
            /*--------------------Section devs-------------------*/
      <section className="divis">
      <Web></Web>
    <Ido></Ido>
    <Metta></Metta>
    </section>
        );
    }
}
 
export default DevTools;