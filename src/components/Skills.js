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
          <h1>Tools</h1>
          <div className="listSkills">
            <div className="skill" title="Angular"><img src={AngularLogo}/></div><p>Angular</p>
            <div className="skill" title="Css"><img src={CssLogo}/></div><p>Css</p>
            <div className="skill" title="Firebase"><img src={FirebaseLogo}/></div><p>Firebase</p>
            <div className="skill" title="Git"><img src={GitLogo}/></div><p>Git</p>
            <div className="skill" title="Html"><img src={HTMLLogo}/></div><p>Html</p>
            <div className="skill" title="Javascript"><img src={JavascriptLogo}/></div><p>Javascript</p>
            <div className="skill" title="Json"><img src={JsonLogo}/></div><p>Json</p>
            <div className="skill" title="MongoDB"><img src={MongoDBLogo}/></div><p>MongoDB</p>
            <div className="skill" title="NPM"><img src={NpmLogo}/></div><p>Npm</p>
            <div className="skill" title="React"><img src={ReactLogo}/></div><p >React</p>
          </div>
        </div>
      )
    }
}
  export default Skills; 