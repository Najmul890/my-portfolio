import React from 'react';

const Skill = ({skill}) => {
    return (
        <div className="col-lg-6">
           <div className="skill-card">
               <img src={skill.icon} alt="icon" className="skill-card_icon"/>
               <div className="skill-card_body">
                   <h6 className="skill-card_title">{skill.title} </h6>
                   <p className="skill-card_content">{skill.about} </p>
               </div>                  
           </div>                   
        </div>
    );
};

export default Skill;