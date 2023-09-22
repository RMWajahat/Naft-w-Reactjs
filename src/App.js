import React from 'react';
import Navbar from './components/Navbar';
import BlockChain from './components/BlockChain';
import DevTools from './components/DevTools';
import Foooter from './components/Footer';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <BlockChain></BlockChain>
      <DevTools></DevTools>
      <Foooter></Foooter>
    </React.Fragment>
  );
}

export default App;
