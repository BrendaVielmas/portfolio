import React from 'react';
import '../allcss/Skills.css';
import AngularLogo from '../images/Skills/angular.png';
import CssLogo from '../images/Skills/css.svg';
import FirebaseLogo from '../images/Skills/firebase.png';
import GitLogo from '../images/Skills/git.png';
import HTMLLogo from '../images/Skills/html.png';
import JavascriptLogo from '../images/Skills/javascript.png';
import JsonLogo from '../images/Skills/json.png';
import MongoDBLogo from '../images/Skills/mongodb.png';
import NpmLogo from '../images/Skills/npm.svg';
import ReactLogo from '../images/Skills/react.png';
import Moon from '../images/Skills/moon.png';
import Neptune from '../images/Skills/neptune.png';
import Mars from '../images/Skills/mars.png';
import Earth from '../images/Skills/earth.png';
import Saturn from '../images/Skills/saturn.png';
import Sun from '../images/Skills/sun.png';
import Uranus from '../images/Skills/uranus.png';
import Jupiter from '../images/Skills/jupiter.png';
import Venus from '../images/Skills/venus.png';
import Mercury from '../images/Skills/mercury.png';
import lax from 'lax.js';
import ReactDOM from 'react-dom';



class Skills extends React.Component {
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
      //data-lax-translate-x="800 vw, -200 0, -400 0, -900 -vw" data-lax-anchor="self"
      return (
        <div data-lax-translate-y="vh*2 -200, 0 0" data-lax-anchor="self" id="skillsSection">
            <h1 className="skills">skills</h1>
            
            <div class="skills-circle-wrap">

    <div class="skills-circle">
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={AngularLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={CssLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={FirebaseLogo}/></span></div>
        </div>
        <div class="skill-orbit"> 
            <div class="skill-planet"><span><img className="imgSkills" src={GitLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={JavascriptLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={JsonLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={MongoDBLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={NpmLogo}/></span></div>
        </div>
        <div class="skill-orbit">
            <div class="skill-planet"><span><img className="imgSkills" src={ReactLogo}/></span></div>
        </div>
    </div>
    <div class="skills-top-circle panel"></div>
</div>
           

        </div>
      )
    }
}
  export default Skills;