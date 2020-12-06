import { motion } from 'framer-motion';
import React from 'react';
import projectsData from '../../components/Data/ProjectData';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsVariants={
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
        <motion.div className="container projects"
            variants ={projectsVariants}
            initial= 'hidden'
            animate= 'visible'
             
        >
            <div className="row">
                {
                  projectsData.map(data=> <ProjectCard data={data} /> )
                }
           </div>
        </motion.div>
    );
};

export default Projects;