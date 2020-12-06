import { motion } from 'framer-motion';
import React from 'react';
import icon from '../../assets/icons/react.svg';
import Bar from '../Bar/Bar';



const languages =[
    {
        icon:icon,
        name:'HTML & CSS',
        level:'90'
    },
    
    {
        icon:icon,
        name:'BOOTSTRAP',
        level:'85'
    },
    {
        icon:icon,
        name:'JAVASCRIPT',
        level:'70'
    },
    {
        icon:icon,
        name:'REACT',
        level:'80'
    },
    {
        icon:icon,
        name:'NODE & EXPRESS',
        level:'60'
    },
    {
        icon:icon,
        name:'MONGODB',
        level:'60'
    },
    
]

const tools= [
    {
        icon:icon,
        name:'GIT', 
    },
    {
        icon:icon,
        name:'FIREBASE',
         
    },
    {
        icon:icon,
        name:'NETLIFY',
         
    },
    {
        icon:icon,
        name:'HEROKU',
         
    },
    {
        icon:icon,
        name:'PHOTOSHOP',
         
    },
]

const Resume = () => {
    const resumeVariants={
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
        <motion.div className="container resume"
            variants ={resumeVariants}
            initial= 'hidden'
            animate= 'visible'
            
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                           BSC in Textile Engineering 
                        </h5>
                        <p className="resume-card_year">
                            University of South Asia (2017-2020)
                        </p>
                        
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Web Training
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                          Programming Hero Web Development Course By <span style={{color:'#00F260'}} >Jhankar Mahbub </span> <span className="resume-card_year">(2020)</span>
                        </h5>
                        
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg resume-languages">
                    <h5 className="resume-language_heading mt-4">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body mt-4">
                        {
                           languages.map(language=> <Bar value={language}/> )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading mt-4">
                        Technology
                    </h5>
                    <div className="resume-language_body mt-4">
                        {
                           tools.map(tool=> <Bar value={tool}/> )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;