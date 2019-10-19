import React from 'react';
import '../allcss/Menu.css';
import { scrollTo } from './Functions';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToFunctionAbout = this.scrollToFunctionAbout.bind(this);
    this.scrollToFunctionSkills = this.scrollToFunctionSkills.bind(this);
    this.scrollToFunctionProjects = this.scrollToFunctionProjects.bind(this);
    this.scrollToFunctionContact = this.scrollToFunctionContact.bind(this);
  
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
    render(){
      return (
        <div className="Menu">
            <button onClick={this.scrollToFunctionAbout}>About</button>
            <button onClick={this.scrollToFunctionSkills}>Skills</button>
            <button onClick={this.scrollToFunctionProjects}>Projects</button>
            <button onClick={this.scrollToFunctionContact}>Contact</button>
        </div>
      )
    }
}
  export default Menu;