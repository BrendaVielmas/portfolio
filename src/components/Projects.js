import React from 'react';
import '../allcss/Projects.css';

class Projects extends React.Component {

    render(){
      return (
        <div className="Projects" id="projectsSection">
          <h1>projects</h1>
          <div className='tableOfProjects'>
                <div className="div">Cipher Code</div>
                <div className="div">Data Lovers</div>
                <div className="div">Social Network</div>
              
                <div className="div">Lab Notes</div>
                <div className="div">Movie Challenge</div>
                <div className="div">MD-links</div>
                <div className="div">Burger Queen</div>
          </div>
        </div>
      )
    }
}
  export default Projects;