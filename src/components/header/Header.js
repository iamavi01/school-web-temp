import React from 'react';
import './Header.css';

const Header = () => {
    return (<>
        <div className="header_body">
            <div className="header_container1"><div className="header_heading">Shree Pokhariya Secondary School</div><br />
            Shree Pokhariya Secondary School which is situated in Biratnagar metropolitan city ward No.- 3, Morang is a community based school. It is fully a government funded school too. The school is located far from the main city of Biratnagar. It is about one kilometer Eastern part of Biratnagar Airport. Being a community based school, it has been well known institution as a quality education in Biratnagar as well as all over Province 1.<span className="header_hide"> The school has been the major educational institution for Janajatis, backward families, lower and middle class people as well as the Madheshi people of this region. If we observe the total number of students, the numbers of girls are more than the number of boys.  In this way, it has been cleared that the majority of girls have been studying in community based schools.</span><br /><br />
            <div className="header_btn"><button className="header_more_btn">Read More</button></div>
            </div>
              
                <div className="header_container2">
                    <div className="header_heading">Message from the Principal</div><br />
                    <div className="header_image_container">
                    <div className="header_image_container1"><img  className="header_image" src="https://manager.pokhariyaschool.edu.np/uploads/pokhariyaschool/profile_pic/principal1.jpg" height="200" width="180" /><br />Khem Raj Bhattrai</div><br />
                    <div className="header_image_container2">We are living in a world that contrasts significantly from the one that we grew up in, the one where we received education in. The world is accelerating towards such humongous change today so much so that we as the kindlers of education should take a pause and reflect upon this existing system of Education.</div><br />
                    </div>
                    <div className="header_btn"><button className="header_more_btn">Read More</button></div>
                </div>
        </div>
    </>)
}

export default Header;
