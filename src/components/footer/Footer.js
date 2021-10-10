import React from "react";
import "./footer.css";
import {AiTwotoneMail,AiFillTwitterCircle,AiOutlineInstagram,AiOutlineWhatsApp} from     "react-icons/ai"
import {BsFillTelephoneFill ,BsFacebook } from 'react-icons/bs';
import {ImLocation} from "react-icons/im"
import {MdExpandMore} from "react-icons/md"
const Footer = () => {
  const number=98000000000
    const email="someone@gmail.com"
    const location="biratnagar bargachhi"
  return (
    <>
    <footer>

      <section className="footer">
            <div className="inner_first_items_logo">
              <div><img
                height="100px"
                width="100px"
                src="https://manager.pokhariyaschool.edu.np/uploads/pokhariyaschool/logo/logo.png"
                /></div>
              <div className="call">
              <BsFillTelephoneFill className="icon themgreen"/> Phone:{number}
              </div>
              <div className="mail text_color_white">
              <AiTwotoneMail className="icon themgreen"/> Email:{email}
              </div>
              <div className="location text_color_white">
              <ImLocation className="icon themgreen" /> Location:{location}
              </div>
            </div>

          <div className="inner_second ">
           <div className="tittle text_color_white capitalize align_left">some useful links</div>
           <div className="line"></div>
           <ul className="tlinks light">
             <li className="capitalize linkslist align_left " ><MdExpandMore className="rotate"/>Home</li>
             <li className="capitalize linkslist align_left "><MdExpandMore className="rotate"/>COntact</li>
             <li className="capitalize linkslist align_left "><MdExpandMore className="rotate"/>Learn</li>
             <li className="capitalize linkslist align_left "><MdExpandMore className="rotate"/>visit</li>
             <li className="capitalize linkslist align_left "><MdExpandMore className="rotate"/>okay</li>
             <li className="capitalize linkslist align_left "><MdExpandMore className="rotate"/>gogo</li>
             <li className="capitalize linkslist align_left "><MdExpandMore className="rotate"/>come</li>
             </ul></div>
          
            <div className="inner_first_items_logo">
              <div><img
                height="100px"
                width="100px"
                src="https://manager.pokhariyaschool.edu.np/uploads/pokhariyaschool/logo/logo.png"
                /></div>
              <div>
                  <p className="call" >Email:{email}</p >
              </div>
            </div>
      </section>
      <div className="hrbig"></div>
      <div className="Social_Links">
        <div className="social_icons"><BsFacebook/></div>
        <div className="social_icons"><AiFillTwitterCircle/></div>
        <div className="social_icons"><AiOutlineInstagram/></div>
        <div className="social_icons"><AiOutlineWhatsApp/></div>
      </div>
                </footer>
    </>
  );
};

export default Footer;
