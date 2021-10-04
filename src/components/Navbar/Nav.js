import React from 'react';
import './Nav.css';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {

    



    return (
        <div className="nav_body">
            <ul className="nav_ul">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>ADMISSION</li>
                <li>ACTIVITIES</li>
                <li>DOWNLOAD</li>
                <li>CARRER</li>
                <li>CONTACT</li>
            </ul>
            <div className="nav_res"><button className="nav_btn" onClick={nav_click}> <AiOutlineMenu /></button></div>
            <div className=""></div>
        </div>
    )
}

export default Nav
