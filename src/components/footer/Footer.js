import React from "react";
import "./footer.css";
import {AiTwotoneMail} from "react-icons/ai"
import {BsFillTelephoneFill} from 'react-icons/bs';
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
              <BsFillTelephoneFill className="clicon"/> Phone:{number}
              </div>
              <div className="mail text_color_white">
              <AiTwotoneMail className="mailicon"/> Email:{email}
              </div>
              <div className="location text_color_white">
              <ImLocation className="mailicon" /> Location:{location}
              </div>
            </div>

          <div className="inner_second ">
           <div className="tittle text_color_white uppercase align_left">some useful links</div>
           <ul className="tlinks">
             <li className="capitalize align_left " ><MdExpandMore className="rotate"/>Home</li>
             <li className="capitalize align_left "><MdExpandMore className="rotate"/>COntact</li>
             <li className="capitalize align_left "><MdExpandMore className="rotate"/>Learn</li>
             <li className="capitalize align_left "><MdExpandMore className="rotate"/>visit</li>
             <li className="capitalize align_left "><MdExpandMore className="rotate"/>okay</li>
             <li className="capitalize align_left "><MdExpandMore className="rotate"/>gogo</li>
             <li className="capitalize align_left "><MdExpandMore className="rotate"/>come</li>
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
      <div className="Social_Links">
        Social Links Here
      </div>
                </footer>
    </>
  );
};

export default Footer;
