import React from 'react';
import '../allcss/Menu.css';
import '../allcss/ihover.css';
import { scrollTo } from './Functions';
import btnHome from '../images/topbtn.png';
import contact from '../images/contactcomp.jpg';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import slider4 from '../images/slider4.jpg';
import slider5 from '../images/slider5.jpg';
import slider6 from '../images/slider6.jpg';
import slider7 from '../images/slider7.jpg';
import slider8 from '../images/slider8.jpg';
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
          <div className="hexagonsSec">
            <div className='one'>
           
              <div  className='otherDiv'> 
                <Writer title="Hello" strings={[
                  'I am a <strong>Front-End</strong>',
                  'I am a <strong>Woman</strong>',
                  'I am <strong>Breen</strong>'
                ]}/>
              </div>
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                <a href="#" onClick={this.scrollToFunctionAbout} >
                <div class="img">
                <div className="slider">
                  <figure>
                    <img src={slider1} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider2} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider3} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider4} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider5} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider6} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider7} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider8} alt=""></img>
                  </figure>
                </div>
                </div>
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
                  <div class="img">
                    <div className="slider">
                    <figure>
                        <img src={slider2} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider3} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider4} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider5} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider6} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider7} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider8} alt=""></img>
                      </figure>
                      <figure>
                        <img src={slider1} alt=""></img>
                      </figure>
                      
                    </div>
                  </div>
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
                  'I am a <strong>Woman</strong>',
                  'I am <strong>Breen<strong>',
                  'I am a <strong>Front-End</strong>'
                ]}/>
              </div>
              <div className="projectsSec">
              <div class="ih-item circle visibleDiv effect13 from_left_and_right">
                    <a href="#" onClick={this.scrollToFunctionProjects}>
                    <div class="img">
                      <div className="slider">
                      <figure>
                          <img src={slider3} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider4} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider5} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider6} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider7} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider8} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider1} alt=""></img>
                        </figure>
                        <figure>
                          <img src={slider2} alt=""></img>
                        </figure>
                       
                      </div>
                    </div>
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
                <div class="img">
                  <div className="slider">
                  <figure>
                      <img src={slider4} alt=""></img>
                    </figure>
                    <figure>
                      <img src={slider5} alt=""></img>
                    </figure>
                    <figure>
                      <img src={slider6} alt=""></img>
                    </figure>
                    <figure>
                      <img src={slider7} alt=""></img>
                    </figure>
                    <figure>
                      <img src={slider8} alt=""></img>
                    </figure>
                    <figure>
                    <img src={slider1} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider2} alt=""></img>
                  </figure>
                  <figure>
                    <img src={slider3} alt=""></img>
                  </figure>
                  </div>
                </div>
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
                'I am <strong>Breen</strong>',
                'I am a <strong>Front-End</strong>',
                'I am a <strong>Woman</strong>'
                ]}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
  export default Menu;