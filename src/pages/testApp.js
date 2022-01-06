import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UIKit from './allComponents';
import BrowseBonds from './browseBonds.js';
import Landing from './landing';
import Community from './community';
import Wallet from './wallet';
import Margin from './margin';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/browse_bonds' exact component={BrowseBonds} />
        <Route path='/docs' exact component={UIKit} />
        <Route path='/margin_systems' exact component={Margin} />
        <Route path='/community' exact component={Community} />
        <Route path='/wallet' exact component={Wallet} />
      </Switch>
      <Footer/>
    </Router>
    // <div>
    //   <Modal/>
    // </div>
  );
}

export default App;