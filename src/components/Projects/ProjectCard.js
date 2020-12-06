import React from 'react';
import githubIcon from '../../assets/icons/github.svg';

const ProjectCard = (props) => {
    const {name, img, deployedURL, githubURL} = props.data;
    return (
        <div className="project-card col-lg-4 col-md-6 my-2">
           <figure className="project-card_wrapper">
               <a href={deployedURL} target="_blank">
                   <img src={img} alt={name} className="project-card_img"/>
               </a>
               <div className="project-card_title">
                   <a href={githubURL} target="_blank" >
                       <img src={githubIcon} alt="githubIcon" className="project-card_icon"/>
                   </a>
                   <span className="ml-3">{name} </span>
               </div>
           </figure>  
        </div>
    );
};

export default ProjectCard;