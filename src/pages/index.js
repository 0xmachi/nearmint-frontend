import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import SupportSection from '../components/SupportSection';
import DetailSection from '../components/DetailSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <HeroSection />
      <InfoSection />
      <SupportSection />
      <DetailSection />
      <Footer />
    </Router>
  );
}

export default Home;