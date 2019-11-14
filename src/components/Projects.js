import React from 'react';
import '../allcss/Projects.css';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.showProjectsLinksOne = this.showProjectsLinksOne.bind(this);
    this.showProjectsLinksTwo = this.showProjectsLinksTwo.bind(this);
    this.showProjectsLinksThree = this.showProjectsLinksThree.bind(this);
    this.showProjectsLinksFour = this.showProjectsLinksFour.bind(this);
  }
  showProjectsLinksOne(event) {
    document.getElementById("projectOne").style.display = "block";
    document.getElementById("projectTwo").style.display = "none";
    document.getElementById("projectThree").style.display = "none";
    document.getElementById("projectFour").style.display = "none";
  }
  showProjectsLinksTwo(event) {
    document.getElementById("projectTwo").style.display = "block";
    document.getElementById("projectOne").style.display = "none";
    document.getElementById("projectThree").style.display = "none";
    document.getElementById("projectFour").style.display = "none";
  }
  showProjectsLinksThree(event) {
    document.getElementById("projectThree").style.display = "block";
    document.getElementById("projectTwo").style.display = "none";
    document.getElementById("projectOne").style.display = "none";
    document.getElementById("projectFour").style.display = "none";
  }
  showProjectsLinksFour(event) {
    document.getElementById("projectFour").style.display = "block";
    document.getElementById("projectTwo").style.display = "none";
    document.getElementById("projectThree").style.display = "none";
    document.getElementById("projectOne").style.display = "none";
  }
    render(){
      return (
        <div className="Projects" id="projectsSection">
          <h1>projects</h1>
          <div>
            <div onClick={this.showProjectsLinksOne} className="flip-container">
              <div className="hexagon">
                <div className="front"></div>
                <div className="back"><h1>NOT-E:</h1> a very friendly app to save all your notes.</div>
              </div>
              <div id="projectOne">
                <div className="showHover demo"><p>Demo</p></div>
                <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-lab-notes"><p>Github</p></a></div>
              </div>
            </div>
            <div onClick={this.showProjectsLinksTwo} className="flip-container">
              <div className="hexagon">
                <div className="front"></div>
                <div className="back"><h1>ECOstep:</h1> the best social network to change, buy or recommendate things about the ecology.</div>
              </div>
              <div id="projectTwo">
                <div className="showHover demo"><p>Demo</p></div>
                <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-social-network"><p>Github</p></a></div>
              </div> 
            </div>
            <div onClick={this.showProjectsLinksThree} className="flip-container">
              <div className="hexagon">
                <div className="front"></div>
                <div className="back"><h1>Nekoffee</h1> Ready to order? A sistem to do request in a Restaurant.</div>
              </div>
              <div id="projectThree">
                <div id="showHoverD" className="showHover demo"><p>Demo</p></div>
                <div id="showHoverG" className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-Burger-Queen-Back-End"><p>Github</p></a></div>
              </div>
            </div>
            <div onClick={this.showProjectsLinksFour} className="flip-container">
              <div className="hexagon">
              <div className="front"></div>
                <div className="back"><h1>Piammy:</h1> We can really teach through technology. Interactive piano to kids.</div>
              </div>
              <div id="projectFour">
                <div id="showHoverD" className="showHover demo"><p>Demo</p></div>
                <div id="showHoverG" className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-personal-project"><p>Github</p></a></div>
              </div>
            </div>
          </div>  
        </div>
         
      )
    }
}
  export default Projects;