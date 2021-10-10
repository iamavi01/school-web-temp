import React,{useState, useEffect} from 'react'
import './Achievement.css';
import { GiTrophy } from 'react-icons/gi';
import { DiAtom } from 'react-icons/di';
import {SiGoogleclassroom} from 'react-icons/si';
import CountUp from 'react-countup';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Achievement = () => {

    // useEffect(()=>{
    //     Aos.init({duration: 1000});
    // },  [])
    Aos.init();


    const [counter1, setCounter1]= useState(0);
    const [counter2, setCounter2]= useState(0);
    const [counter3, setCounter3]= useState(0);
    const [counter4, setCounter4]= useState(0);

    window.addEventListener('scroll',()=>{
        const scrolled = window.scrollY;

        // const ach_1=document.querySelector('.ach_1');
        // const ach_2=document.querySelector('.ach_2');
        // const ach_3=document.querySelector('.ach_3');
        // const ach_4=document.querySelector('.ach_4');

        if(scrolled > 1367.777){
            setCounter1(1);
            setCounter2(25);
            setCounter3(2000);
            setCounter4(60);
    //         ach_1.style.display="flex";
    //         ach_2.style.display="flex";
    //         ach_3.style.display="flex";
    //         ach_4.style.display="flex";

    //         ach_1.style.animation=" ani 1.5s linear 0.1s 1 normal";
    //         ach_2.style.animation=" ani 1.5s linear 0.1s 1 normal";
    //         ach_3.style.animation=" ani 1.5s linear 0.1s 1 normal";
    //         ach_4.style.animation=" ani 1.5s linear 0.1s 1 normal";

        }else{
            setCounter1(0);
            setCounter2(0);
            setCounter3(0);
            setCounter4(0);
    //         ach_1.style.display="none";
    //         ach_2.style.display="none";
    //         ach_3.style.display="none";
    //         ach_4.style.display="none";

    //         ach_1.style.animation="";
    //         ach_2.style.animation="";
    //         ach_3.style.animation="";
    //         ach_4.style.animation="";

        }
        
    })

    return (
        <>
        {/* <CountUp end={2000} duration={5}/> */}
            <div className="achievement_body">
                <div data-aos="fade-up" data-aos-duration="1000" className="ach_1"><GiTrophy  className="ach_logo" />
                <span>#<CountUp end={counter1}duration={0.8} /></span>
                <span className="ach_text"> School<br />in Biratnagar</span></div>

                <div data-aos="fade-up" data-aos-duration="1000" className="ach_2"><DiAtom className="ach_logo" />
                <span> <CountUp end={counter2} duration={1.5} />+</span>
                <span className="ach_text">School programs</span></div>

                <div data-aos="fade-up" data-aos-duration="1000" className="ach_3"><SiGoogleclassroom className="ach_logo" />
                <span><CountUp end={counter3} duration={1.5} />+</span>
                <span className="ach_text">Students</span></div>

                <div data-aos="fade-up" data-aos-duration="1000" className="ach_4"><BsFillCalendarCheckFill className="ach_logo" />
                <span><CountUp end={counter4} duration={1.8} />+</span>
                <span className="ach_text">Years Experience</span></div>
            </div>
            
        </>
    )
}

export default Achievement
