import React from 'react';
import '../allcss/Projects.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom'

class Projects extends React.Component {

  constructor(props) {
    super(props)
    lax.setup()

    document.addEventListener('scroll', function(x) {
        lax.update(window.scrollY)
    }, false)

    lax.update(window.scrollY)
}
componentDidMount() {
    this.el = ReactDOM.findDOMNode(this)
    lax.addElement(this.el)
}

componentWillUnmount() {
    lax.removeElement(this.el)
  }

    render(){
      return (
 
        <div data-lax-scale="(vh*0.1) 1, -elh 0.5" data-lax-anchor="self" className="Projects" id="projectsSection">
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