import React from 'react';
import NavBar from './components/Navbar/Nav';
import Header from './components/header/Header';
import Latest from './components/news/Latest';
import Slider from './components/header/slider/Slider';
import ScrollTop from './components/Navbar/ScrollToTop';
// import Photos from './components/news/Photos';
import Achievement from './components/achievement/Achievement';
// import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
    <NavBar />
    <Slider />
    <Header />
    <Latest />
    <ScrollTop />
    <Achievement />
    {/* <Photos /> */}
    </>
    );
}

export default App
