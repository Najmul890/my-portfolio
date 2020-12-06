import React from 'react';
import najmul from '../../assets/najmul.jpg';
import facebook from '../../assets/icons/facebook.svg';
import github from '../../assets/icons/github.svg';
import pin from '../../assets/icons/pin.svg';
import tie from '../../assets/icons/tie.svg';
import cv from '../../assets/CV.pdf';
import { motion } from 'framer-motion';


const Sidebar = () => {
    const handleEmail=()=>{
        window.open("mailto:najmul@gmail.com")
    }

    const sidebarVariants ={
        hidden: {
            x: '-20vw',
            
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.7, type: 'spring'
            } 
        }
    }
    return (
        <motion.div className="sidebar"
              variants={sidebarVariants}
              initial= 'hidden'
              animate= 'visible'
        >
            <img src={najmul} alt="najmul" className="sidebar_img "/>
            <div className="sidebar_name">Md. Najmul <span>Hossain</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <a href={cv} download="CV">
                <div className="sidebar_item">
                    <img src={tie} alt="resume" className="sidebar_icon"/>
                    Download Resume 
                </div>
            </a>
            <figure className="sidebar_social-icons my-2">
                <a href=""><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
                <a href=""><img src={github} alt="github" className="sidebar_icon"/></a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_location">
                    <img src={pin} alt="location" className="sidebar_icon"/>
                    Dhaka, Bangladesh
                </div>
                <div className="sidebar_item">
                    najmul890890@gmail.com
                </div>
                <div className="sidebar_item">
                    01858363204
                </div>
            </div>
            <div onClick={handleEmail} className="sidebar_item sidebar_email">Email Me</div>
        </motion.div>
    );
};

export default Sidebar;