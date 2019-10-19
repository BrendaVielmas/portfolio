import React from 'react';
import '../allcss/Projects.css';

class Projects extends React.Component {

    render(){
      return (
        <div className="Projects" id="projectsSection">
          <h1>projects</h1>
          <div className='tableOfProjects'>
                <div className="projectCard">Cipher Code</div>
                <div className="projectCard">Data Lovers</div>
                <div className="projectCard">Social Network</div>
              
                <div className="projectCard">Lab Notes</div>
                <div className="projectCard">Movie Challenge</div>
                <div className="projectCard">MD-links</div>
                <div className="projectCard">Burger Queen</div>
          </div>
        </div>
      )
    }
}
  export default Projects;