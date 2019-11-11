import React from 'react';
import '../allcss/Projects.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';


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
        <div className="Projects" id="projectsSection">
          <h1 className="titleProjects">projects</h1>
          <div className='tableOfProjects'>
          </div>
        </div>
      )
    }
}
  export default Projects;