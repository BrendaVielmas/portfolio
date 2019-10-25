import React from 'react';
import '../allcss/Projects.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';
import tvPhoto from '../images/Bien/tv-tony-futura2.png';


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
 // data-lax-scale="(vh*0.1) 1, -elh 0.5" data-lax-anchor="self"
        <div className="Projects" id="projectsSection">
          <h1 className="titleProjects">projects</h1>
          <div className='tableOfProjects'>
                <button className="tvCardBtn"><img src={tvPhoto} className="tvCard"/></button>
                <button className="tvCardBtn"><img src={tvPhoto} className="tvCard"/></button>
                <button className="tvCardBtn"><img src={tvPhoto} className="tvCard"/></button>
                <button className="tvCardBtn"><img src={tvPhoto} className="tvCard"/></button>
          </div>
        </div>
      )
    }
}
  export default Projects;