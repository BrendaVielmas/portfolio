import React from 'react';
import '../allcss/Menu.css';
import '../allcss/ihover.css';
import { scrollTo } from './Functions';
import btnHome from '../images/topbtn.png';
import contact from '../images/contactcomp.jpg';
import Writer from './Writer';


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
           
              <div  className='otherDiv'> 
                <Writer title="Hello" strings={[
                  'I am a<i>Front-End Developer</i>',
                  'I am a<strong>Woman</strong>',
                  'I am Breen;'
                ]}/>
              </div>
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                <a href="#" onClick={this.scrollToFunctionAbout}>
                <div class="img"><img src={contact} alt="img"></img></div>
                  <div class="info">
                    <div class="info-back"> 
                      <h3>About</h3>
                      <p>Description goes here</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='two'>
              <div className="skillsSec">
                <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                  <a href="#" onClick={this.scrollToFunctionSkills}>
                  <div class="img"><img src={contact} alt="img"></img></div>
                    <div class="info">
                      <div class="info-back"> 
                        <h3>Skills</h3>
                        <p>Description goes here</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='otherDiv'>
                <Writer  title="It's" strings={[
                  'I am a<i>Front-End Developer</i>',
                  'I am a<strong>Woman</strong>',
                  'I am Breen;'
                ]}/>
              </div>
              <div className="projectsSec">
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                    <a href="#" onClick={this.scrollToFunctionProjects}>
                    <div class="img"><img src={contact} alt="img"></img></div>
                      <div class="info">
                        <div class="info-back"> 
                          <h3>Projects</h3>
                          <p>Description goes here</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
            </div>
            <div className='three'>
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                <a href="#" onClick={this.scrollToFunctionContact}>
                <div class="img"><img src={contact} alt="img"></img></div>
                  <div class="info">
                    <div class="info-back"> 
                      <h3>Contact</h3>
                      <p>Description goes here</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='otherDiv'>
              <Writer  title="Me" strings={[
                'I am a<i>Front-End Developer</i>',
                'I am a<strong>Woman</strong>',
                'I am Breen;'
                ]}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
  export default Menu;