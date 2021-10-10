import React from 'react';
import './Nav.css';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BiArrowToTop } from 'react-icons/bi';
// import {useState, useEffect } from 'react';
// import { FiLogIn } from 'react-icons/fi';
const Nav = () => {

    const nav_click=() =>{
        const nav_ham = document.querySelector('.nav_ham');
        const nav_btn = document.querySelector('.nav_btn');
        
        if (nav_ham.style.display == 'block'){
        nav_ham.style.display='none';
        // nav_btn.style.backgroundColor= 'white';

    }else{
        nav_ham.style.display='block';
        // nav_btn.style.backgroundColor= 'whitesmoke';

        }
    }

    const nav_dropdown=()=>{
        // console.log("sax");
        const nav_hover = document.querySelector('.nav_hover');
        nav_hover.style.display='block';
        // nav_hover.style.zIndex='100';

    }
    const nav_dropup=()=>{
        // console.log("sax");
        const nav_hover = document.querySelector('.nav_hover');
        nav_hover.style.display='none';
        // nav_hover.style.zIndex='0';
    }

    const nav_dropdown2=()=>{
        const nav_hover2 = document.querySelector('.nav_hover2');
        nav_hover2.style.display='block';

    }
    const nav_dropup2=()=>{
        const nav_hover2 = document.querySelector('.nav_hover2');
        nav_hover2.style.display='none';
    }

    const nav_dropdown3=()=>{
        const nav_hover3 = document.querySelector('.nav_hover3');
        nav_hover3.style.display='block';

    }
    const nav_dropup3=()=>{
        const nav_hover3 = document.querySelector('.nav_hover3');
        nav_hover3.style.display='none';
    }

    const nav_dropdown4=()=>{
        const nav_hover4 = document.querySelector('.nav_hover4');
        nav_hover4.style.display='block';

    }
    const nav_dropup4=()=>{
        const nav_hover4 = document.querySelector('.nav_hover4');
        nav_hover4.style.display='none';
    }


    return (<>
        
        <div className="nav_body">
                <img src="https://kaha6.com/wp-content/uploads/Shree-Pokhariya-Secondary-School.jpg" className="nav_logo" />
            <ul className="nav_ul">
                <li>HOME</li>
                <li onMouseOver={nav_dropdown} onMouseLeave={nav_dropup}>ABOUT <span className="nav_li_down" ><AiOutlineDown /></span>
                <ul className="nav_hover">
                    <li>Intoduction</li>
                    <li>Message from Principle</li>
                    <li>Facility</li>
                </ul>
                </li>
                <li className="items">ADMISSION</li>
                <li className="items"onMouseOver={nav_dropdown2} onMouseLeave={nav_dropup2}>ACTIVITIES <span className="nav_li_down" ></span>
                <ul className="nav_hover2">
                    <li>Events</li>
                    <li>News</li>
                    <li>Gallery</li>
                    <li>Academic Calender</li>
                </ul>
                </li>
                <li>DOWNLOAD</li>
                <li>CARRER</li>
                <li>CONTACT</li>
            </ul>
            {/* <div className="nav_login"><button className="nav_login_btn"><span>Log in</span>&nbsp; <span className="nav_login_icon"><FiLogIn  /></span> </button></div><br /> */}
            {/* <button className="nav_login">Log in &nbsp;<FiLogIn /></button> */}
            <button className="nav_btn" onClick={nav_click}> <AiOutlineMenu /></button>
            <div className="nav_ham">
                <ul className="nav_ham_ul">
                <li>HOME</li>
                <li onMouseOver={nav_dropdown3} onMouseLeave={nav_dropup3} >ABOUT<span className="nav_float_right"><BsFillCaretRightFill /></span>
                <ul className="nav_hover3">
                <li>Introduction</li>
                <li>Message from the principle</li>
                <li>Facility</li>
                </ul>
                </li>
                <li>ADMISSION</li>
                <li onMouseOver={nav_dropdown4} onMouseLeave={nav_dropup4} >ACTIVITIES<span className="nav_float_right"><BsFillCaretRightFill /></span>
                <ul className="nav_hover4">
                <li>Events</li>
                    <li>News</li>
                    <li>Gallery</li>
                    <li>Academic Calender</li>
                </ul>
                </li>
                <li>DOWNLOAD</li>
                <li>CARRER</li>
                <li>CONTACT</li>
                </ul>
            </div>
        </div>
    </>)
}

export default Nav
