import React from 'react';
import NavBar from './components/Navbar/Nav';
import Header from './components/header/Header';
import Slider from "./components/header/slider/Slider"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import  "./components/footer/footer.css"
import Latest from './components/news/Latest';
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
    <Footer></Footer>
    {/* <Photos /> */}
    </>
    );
}

export default App
