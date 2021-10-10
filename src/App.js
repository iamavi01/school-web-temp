import React from 'react';
import NavBar from './components/Navbar/Nav';
import Header from './components/header/Header';
import Slider from "./components/header/slider/Slider"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import  "./components/footer/footer.css"
import Latest from './components/news/Latest';

function App() {
  return (
    <>
    <NavBar />
    <Slider/>
    {/* <Header /> */}
    <Latest />
    <Footer></Footer>
    </>
    );
}

export default App
