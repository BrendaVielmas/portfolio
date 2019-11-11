import React from 'react';
import '../allcss/Menu.css';
import { scrollTo } from './Functions';
import btnHome from '../images/topbtn.png';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToFunctionAbout = this.scrollToFunctionAbout.bind(this);
    this.scrollToFunctionSkills = this.scrollToFunctionSkills.bind(this);
    this.scrollToFunctionProjects = this.scrollToFunctionProjects.bind(this);
    this.scrollToFunctionContact = this.scrollToFunctionContact.bind(this);
    this.goToTheTopBtn = this.goToTheTopBtn.bind(this);
    this.scrollTopHome = this.scrollTopHome.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.goToTheTopBtn, true);
  }
  scrollToFunctionAbout(event) {
    scrollTo(document.getElementById("aboutSection"))
  }
  scrollToFunctionSkills(event) {
    scrollTo(document.getElementById("skillsSection"))
  }
  scrollToFunctionProjects(event) {
    scrollTo(document.getElementById("projectsSection"))
  }
  scrollToFunctionContact(event) {
    scrollTo(document.getElementById("contactSection"))
  }
  goToTheTopBtn(){
    if (!document.getElementById("imgTop")){
      return
    }
    if (document.documentElement.scrollTop < 750) {
      document.getElementById("imgTop").className = "invisible";
    } else {
      document.getElementById("imgTop").className = "";
    }
  }

  scrollTopHome(){
    scrollTo(document.getElementById("menuSection"))
  }
  
    render(){
      return (
        <div id="menuSection" className="Menu">
          <img className="invisible" onClick={this.scrollTopHome} id="imgTop" src={btnHome}/>
          <div className="name"><h1> Brenda Vielmas </h1></div>
          <div className="hexagon">
            <div className='one'>
                <div className='otherDiv'></div>
                <a onClick={this.scrollToFunctionAbout}><div className='aboutDiv'><h1 className='componentName'>About</h1></div></a>
              </div>
              <div className='two'>
               <div className="skillsSec"><a onClick={this.scrollToFunctionSkills}><div className='skillsDiv'><h1 className='componentName'>Skills</h1></div></a></div>
                <div className='otherDiv'></div>
                <div className="projectsSec"><a onClick={this.scrollToFunctionProjects}><div className='projectsDiv'><h1 className='componentName'>Projects</h1></div></a></div>
              </div>
              <div className='three'>
                <a onClick={this.scrollToFunctionContact}><div className='contactDiv'><h1 className='componentName'>Contact</h1></div></a>
                <div className='otherDiv'></div>
              </div>
          </div>
        </div>
      )
    }
}
  export default Menu;