import React from 'react';
import '../allcss/Projects.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';


class Projects extends React.Component {

    render(){
      return (
        <div className="Projects" id="projectsSection">
          <h1 className="titleProjects">projects</h1>
          <div className='tableOfProjects'>
          </div>
        </div>
      )
    }
}
  export default Projects;