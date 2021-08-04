import { projects as projectsImport } from "../../contents/projects";
import { Link } from "react-router-dom";
import "./ProjectLinks.css";

export function ProjectLinks() {
  const projects = projectsImport;
  return (
    <div className="projects-links-div">
      <h2 className="check-out-heading">Check out my projects!</h2>
      <ul className="project-links">
        {projects.map((project, index) => {
          return (
            <li className="project-link" key={index}>
              <Link onClick={()=> window.scrollTo(0, 0)} to={`/${project.url}`}>
                <ProjectPreview project={project}/>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProjectPreview({project}){
  return(
      <div className="project-preview">
          <h2 className="project-preview-title">{project.title}</h2>
          <img className="project-preview-thumbnail" src={project.thumbnail} alt={`${project.title} thumbnail`}></img>
          <p className="project-preview-technology">{project.technology}</p>
      </div>
  )
}