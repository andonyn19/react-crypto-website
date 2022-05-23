import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Earn from './components/Earn';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <Earn />
      <Footer />
    </>
  );
}

export default App;
