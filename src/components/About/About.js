import { motion } from 'framer-motion';
import React from 'react';
import icon1 from '../../assets/icons/ux.svg';
import icon2 from '../../assets/icons/repair.svg';
import icon3 from '../../assets/icons/backend.svg';
import icon4 from '../../assets/icons/computer.svg';

import Skill from '../Skill/Skill';


const skills=[
    
    
    {
        icon:icon4,
        title:'React Projects',
        about:'To develop a React project, I use React for front-end, Firebase for authentication, Stripe js for payment method (E-Commerce Website).'
    },
    {
        icon:icon2,
        title:'MERN Projects',
        about:'As a MERN project, I use React for front-end, Node-Express for back-end and Mongodb for Database.'
    }
    ,
    {
        icon:icon1,
        title:'Landing Page',
        about:'I  create a landing page with HTML, CSS, and Bootstrap which is responsive and very cool to watch. '
    },
    {
        icon:icon3,
        title:'Javascript Projects',
        about:'I can also develop a project via HTML, CSS and core Javascript '
    }
    
]

const About = () => {
    const aboutVariants={
        hidden: {
            opacity:0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6
            }
        }
    }

    return (
        <motion.div className="about"
          variants ={aboutVariants}
          initial= 'hidden'
          animate= 'visible'
        //   exit= 'exit'
        >
            <h6 className="about_intro">
                I am currently studying BSC in Textile Engineering (4th Year). I am a front-end Web Developer. I consider myself who is persistent, a quick learner and loves to go deep into project. 
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">
                    Type's of projects I can do
                </h6>
                <div className="row">
                   {
                       skills.map(skill=>
                          <Skill skill={skill} ></Skill>
                        )
                   }
                </div>
            </div>
        </motion.div>
    );
};

export default About;