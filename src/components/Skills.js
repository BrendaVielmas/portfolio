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
      return (
        <div data-lax-translate-x="800 vw, -200 0, -400 0, -900 -vw" data-lax-anchor="self" id="skillsSection">
            <h1 className="skills">skills</h1>
            <table className="skillsGroup" >
                <tr>
                  <td><img className="imgSkills" src={AngularLogo}/></td><p className="skillName">Angular</p>
                  <td><img className="imgSkills" src={CssLogo}/></td><p className="skillName">Css</p>
                  <td><img className="imgSkills" src={FirebaseLogo}/></td><p className="skillName">Firebase</p>
                  <td><img className="imgSkills" src={GitLogo}/></td><p className="skillName">Git</p>
                  <td><img className="imgSkills" src={HTMLLogo}/></td><p className="skillName">Html</p>
                </tr>
                <tr>
                  <td><img className="imgSkills" src={JavascriptLogo}/></td><p className="skillName">Javascript</p>
                  <td><img className="imgSkills" src={JsonLogo}/></td><p className="skillName">Json</p>
                  <td><img className="imgSkills" src={MongoDBLogo}/></td><p className="skillName">MongoDB</p>
                  <td><img className="imgSkills" src={NpmLogo}/></td><p className="skillName">Npm</p>
                  <td><img className="imgSkills" src={ReactLogo}/></td><p className="skillName">React</p>
                </tr>
                
            </table>
            

        </div>
      )
    }
}
  export default Skills;