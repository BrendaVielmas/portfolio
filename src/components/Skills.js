import React from 'react';
import '../allcss/Skills.css';
import AngularLogo from '../images/Skills/angular.svg';
import CssLogo from '../images/Skills/css.svg';
import FirebaseLogo from '../images/Skills/firebase.svg';
import GitLogo from '../images/Skills/git.png';
import HTMLLogo from '../images/Skills/html.png';
import JavascriptLogo from '../images/Skills/js.jpg';
import JsonLogo from '../images/Skills/json.svg';
import MongoDBLogo from '../images/Skills/mongodb.png';
import NpmLogo from '../images/Skills/npm.png';
import ReactLogo from '../images/Skills/react.png';



class Skills extends React.Component {

    render(){
      return (
        <div className="skillsComponent" id="skillsSection">
          <h1>skills</h1>
          <div className="listSkills">
            <div className="skill"><img src={AngularLogo}/><p >Angular</p></div>
            <div className="skill"><img src={CssLogo}/><p >Css</p></div>
            <div className="skill"><img src={FirebaseLogo}/><p >Firebase</p></div>
            <div className="skill"><img src={GitLogo}/><p >Git</p></div>
            <div className="skill"><img src={HTMLLogo}/><p >Html</p></div>
            <div className="skill"><img src={JavascriptLogo}/><p >Javascript</p></div>
            <div className="skill"><img src={JsonLogo}/><p >Json</p></div>
            <div className="skill"><img src={MongoDBLogo}/><p >MongoDB</p></div>
            <div className="skill"><img src={NpmLogo}/><p >Npm</p></div>
            <div className="skill"><img src={ReactLogo}/><p >React</p></div>
          </div>
        </div>
      )
    }
}
  export default Skills; 