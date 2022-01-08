import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Landing from './landing';
import Community from './community';
import Wallet from './wallet';
import Margin from './margin';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <HeroSection />
      <InfoSection />
    </Router>
  );
}

export default Home;