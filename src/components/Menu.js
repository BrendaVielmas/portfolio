import React from 'react';
import '../allcss/Menu.css';
import { scrollTo } from './Functions';
import homePhoto from '../images/Bien/spaguetti-eugenia-loli.png';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToFunctionAbout = this.scrollToFunctionAbout.bind(this);
    this.scrollToFunctionSkills = this.scrollToFunctionSkills.bind(this);
    this.scrollToFunctionProjects = this.scrollToFunctionProjects.bind(this);
    this.scrollToFunctionContact = this.scrollToFunctionContact.bind(this);
    this.goToTheTopBtn = this.goToTheTopBtn.bind(this);
  
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
    window.scrollTo(0, 0)
  }
    render(){
      return (
        <div className="Menu">
            <button id="homePhoto" className='homePhotoBtn'><img className='homePhoto' onClick={this.goToTheTopBtn} src={homePhoto}/></button>
            <button className="menuBtn" onClick={this.scrollToFunctionAbout}>About</button>
            <button className="menuBtn" onClick={this.scrollToFunctionSkills}>Skills</button>
            <button className="menuBtn"onClick={this.scrollToFunctionProjects}>Projects</button>
            <button className="menuBtn" onClick={this.scrollToFunctionContact}>Contact</button>
        </div>
      )
    }
}
  export default Menu;