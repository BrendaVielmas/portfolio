import React from 'react';
import '../allcss/Menu.css';
import '../allcss/ihover.css';
import { scrollTo } from './Functions';
import btnHome from '../images/topbtn.png';
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
          <div className="name"><h1> Brenda Vielmas</h1></div>
          <div className="hexagonsSec">
            <div className='one'>
              <div  className='otherDiv'> 
                <Writer title="Hello" strings={[
                  'I am <strong>Breen</strong>',
                  'I am <strong>Creative</strong>',
                  'I am <strong>Determinated</strong>',
                  'I am <strong>Friendly</strong>',
                  'I am <strong>Cool</strong>',
                  'I am <strong>Honest</strong>',
                  'I am <strong>Happy</strong>',
                  'I am <strong>Beautiful</strong>',
                  'I am <strong>Intelligent</strong>',
                  'I am <strong>Interesting</strong>'  
                ]}/>
              </div>
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                <a href="#" onClick={this.scrollToFunctionAbout} >
                <div class="img">
                
                </div>
                  <div class="info">
                    <div class="info-back"> 
                      <h3>About</h3>
                      <p>Know me!</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='two'>
              <div className="skillsSec">
                <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                  <a href="#" onClick={this.scrollToFunctionSkills}>
                  <div class="img">
                   
                  </div>
                    <div class="info">
                      <div class="info-back"> 
                        <h3>Skills</h3>
                        <p>Check my tools!</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='otherDiv'>
                <Writer  title="It's" strings={[
                  'I am <strong>Ambitious</strong>',
                  'I am <strong>Responsible<strong>',
                  'I am a <strong>Front-End Developer</strong>',
                  'I am <strong>Enthusiastic</strong>',
                  'I am <strong>Optimistic</strong>',
                  'I am <strong>Brave</strong>',
                  'I am <strong>Strong</strong>',
                  'I am <strong>Great</strong>',
                  'I am <strong>Lovely</strong>',
                  'I am <strong>Agile</strong>'
                ]}/>
              </div>
              <div className="projectsSec">
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                    <a href="#" onClick={this.scrollToFunctionProjects}>
                    <div class="img">
                      
                    </div>
                      <div class="info">
                        <div class="info-back"> 
                          <h3>Projects</h3>
                          <p>See my work!</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
            </div>
            <div className='three'>
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                <a href="#" onClick={this.scrollToFunctionContact}>
                <div class="img">
                 
                </div>
                  <div class="info">
                    <div class="info-back"> 
                      <h3>Contact</h3>
                      <p>Reach on me!</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='otherDiv'>
              <Writer  title="Me" strings={[
                'I am <strong>Generous</strong>',
                'I am a <strong>Amazing</strong>',
                'I am a <strong>Spectacular Woman</strong>',
                'I am a <strong>Careful</strong>',
                'I am a <strong>Young</strong>',
                'I am a <strong>Smart</strong>',
                'I am a <strong>Helpful</strong>',
                'I am a <strong>Clever</strong>',
                'I am a <strong>Kind</strong>',
                'I am a <strong>Cheerful</strong>'
                ]}/>
              </div>
            </div>
          </div>
          <div className="profession"><h1>Front-End Developer</h1></div>
        </div>
      )
    }
}
  export default Menu;