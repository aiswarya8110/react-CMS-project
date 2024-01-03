import React from 'react';
import useProjects from '../utils/useProjects';
const Projects = ()=>{
    const projects = useProjects();
    console.log(projects);
    if(projects.length === 0){
        return (
        <section className="projects">
            <h2>Loading...</h2>
        </section>
        )
    }
    return (
        <section className="projects">
            <div className="title">
                <h2>Projects</h2>
                <div className="title-underline" />
            </div>
            <div className="projects-center">
                {projects.map((project)=>{
                    const { id, img, url, title } = project;
                    return (
                        <a href={url} target="_blank" key={id} className="project">
                            <img src={img} alt='project' className="img" />
                            <h5>{title}</h5>
                        </a>
                    )
                })}
            </div>
        </section>
    )
};

export default Projects;