import React from 'react';
import './Photos.css';
import { ImLab } from 'react-icons/im';
import { BiLibrary } from 'react-icons/bi';
import { GiHealthNormal } from 'react-icons/gi';
import { FaBusAlt } from 'react-icons/fa';

const Photos = () => {

  // const pcard = document.querySelector('.photos_body');
  // const penter=()=>{
  //   const pcard=document.querySelector('.photos_card1');
  //   // pcard.style.display='none';
  //   pcard.style.backgroundImage=
  // }
  // const pleave =()=>{
  //   const pcard=document.querySelector('.photos_card1');
  //   // pcard.style.display='block';

  // }



  return (
        <>
          <div className="photos_body">
          <div className="photos_text">We always provide our best effort for your better education and also a lot of facilities and opportunity. Here's a few of them:</div><br/>
          <div className="photos_container">
            <div className="photos_card1" ><ImLab style={{fontSize:"40px"}} />Pratical Labs</div>
            <div className="photos_card2"><BiLibrary style={{fontSize:"40px"}} />Library</div>
            <div className="photos_card3"><GiHealthNormal style={{fontSize:"40px"}} />Health </div>
            <div className="photos_card4"><FaBusAlt style={{fontSize:"40px"}} />Transportation</div>
          </div>
          </div>  
        </>
    )
}

export default Photos
