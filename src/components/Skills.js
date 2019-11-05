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
            <table className="skillsGroup" >
                <tr>
                   <img className="angularSkills" src={AngularLogo}/>
                   <img className="cssSkills" src={CssLogo}/>
                   <img className="firebaseSkills" src={FirebaseLogo}/>
                   <img className="gitSkills" src={GitLogo}/>
                   <img className="htmlSkills" src={HTMLLogo}/>
                </tr>
                   <img className="imgMoon" src={Moon}/>
                <tr>
                   <img className="jsSkills" src={JavascriptLogo}/>
                   <img className="jsonSkills" src={JsonLogo}/>
                   <img className="mongoSkills" src={MongoDBLogo}/>
                   <img className="npmSkills" src={NpmLogo}/>
                   <img className="reactSkills" src={ReactLogo}/>
                </tr>
                
            </table>
                    

        </div>
      )
    }
}
  export default Skills;