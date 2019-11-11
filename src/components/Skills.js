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
            <h1 className="skills">skills</h1>
            <div className="skillsGroup" >
                <div className="tr">
                  <div className="td"><img className="imgSkills" src={AngularLogo}/></div><p className="skillName">Angular</p>
                  <div className="td"><img className="imgSkills" src={CssLogo}/></div><p className="skillName">Css</p>
                  <div className="td"><img className="imgSkills" src={FirebaseLogo}/></div><p className="skillName">Firebase</p>
                  <div className="td"><img className="imgSkills" src={GitLogo}/></div><p className="skillName">Git</p>
                  <div className="td"><img className="imgSkills" src={HTMLLogo}/></div><p className="skillName">Html</p>
                </div>
                <div className="tr">
                  <div className="td"><img className="imgSkills" src={JavascriptLogo}/></div><p className="skillName">Javascript</p>
                  <div className="td"><img className="imgSkills" src={JsonLogo}/></div><p className="skillName">Json</p>
                  <div className="td"><img className="imgSkills" src={MongoDBLogo}/></div><p className="skillName">MongoDB</p>
                  <div className="td"><img className="imgSkills" src={NpmLogo}/></div><p className="skillName">Npm</p>
                  <div className="td"><img className="imgSkills" src={ReactLogo}/></div><p className="skillName">React</p>
                </div>

            </div>


        </div>
      )
    }
}
  export default Skills; 