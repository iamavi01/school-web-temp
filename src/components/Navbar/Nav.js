import React from 'react';
import './Nav.css';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { BsFillCaretRightFill } from 'react-icons/bs';

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

    return (
        <div className="nav_body">
            <div className="logocontainer">
                <div className="logo">
                    Your company logo
                </div>
            </div>
           <div className="nsvlinks"> <ul className="nav_ul">
                <li className="items">HOME</li>
                <li className="items" onMouseOver={nav_dropdown} onMouseLeave={nav_dropup}>ABOUT 
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
                <li className="items">DOWNLOAD</li>
                <li className="items">CARRER</li>
                <li className="items">CONTACT</li>
               </ul>
            </div>
            <div>
            <div className="nav_login"><button className="nav_login_btn"><span>Log in</span>&nbsp; <span className="nav_login_icon"><FiLogIn  /></span> </button></div><br />
            </div>
            
        </div>
    )
}

export default Nav
