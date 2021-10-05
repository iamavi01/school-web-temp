import React from 'react';
import './Latest.css';
import{ BsCalendar2Minus } from 'react-icons/bs';
import latest_data from './latest_data';

const Latest = () => {
    return (<>
            <h2 className="latest_heading">Latest<span className="latest_heading2"> News</span></h2><br /><br />
        <div className="latest_body">
        {latest_data.map((val)=>{
            return (
            <>
            <div className="latest_container">
            {console.log(val)}
                <img className="latest_image" src={val.img} height="450" width="100%" />
                <br /><br /><div className="latest_post_date"><span className="latest_logo"><BsCalendar2Minus /> </span>{val.date_top}</div>
                  <div className="latest_container_title">{val.title}</div><br />
                    <div className="latest_container_body">{val.body}</div>
<br />
<div className="latest_container_footer">{val.date_foot}</div>
            </div>
           </> );
  })
       }

        </div>
    </>)
}

export default Latest;
