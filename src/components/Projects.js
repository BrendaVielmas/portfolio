import React from 'react';
import '../allcss/Projects.css';
import Note from '../images/note.png'
import Neko from '../images/Ne-koffee Aqua.png'
import Piammy from '../images/piammy.png'
import Econix from '../images/econix.png'

class Projects extends React.Component {
  constructor(props) {
    super(props); 
  }
    render(){
      return (
        <div className="Projects" id="projectsSection">
          <h1 data-aos='fade-left'>Projects</h1>
          <div>
            <div data-aos='zoom-in' className="flip-container">
              <div className="hexagon" >
                <div className="front"><img src={Note}></img></div>
                <div className="back"><h1>NOT-E:</h1> A very friendly app to save, edit and delete all your notes. Used technology: React, JS, CSS, HTML, Firebase.
                  <div>
                    <a href="https://brendavielmas.github.io/Not-E/"><div className="showHover"><p>Demo</p></div></a>
                    <a href="https://github.com/BrendaVielmas/Not-E"><div className="showHover"><p>Github</p></div></a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos='zoom-out' className="flip-container">
              <div className="hexagon">
                <div className="front"><img src={Econix}></img></div>
                <div className="back"><h1>ECONIX:</h1> The best social network to change, buy or recommendate things about the ecology. Used technology: JS, HTML, CSS, Firebase.
                  <div>
                    <a href="https://brendavielmas.github.io/Econix/src/"><div className="showHover"><p>Demo</p></div></a>
                    <a href="https://github.com/BrendaVielmas/Econix"><div className="showHover"><p>Github</p></div></a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos='zoom-in' className="flip-container">
              <div className="hexagon">
                <div className="front"><img src={Neko}></img></div>
                <div className="back"><h1>NEKOFFEE</h1> Are you ready to order? A sistem to do request in a Restaurant. Used technology: React, Heroku, JS, HTML, CSS, MongoDB, Node.js, Express.
                  <div>
                    <a href="https://jovial-keller-ef5c8b.netlify.com/"><div className="showHover"><p>Demo</p></div></a>
                    <a href="https://github.com/BrendaVielmas/GDL003-Burger-Queen-Back-End"><div className="showHover"><p>Github</p></div></a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos='zoom-out' className="flip-container">
              <div className="hexagon">
              <div className="front"><img src={Piammy}></img></div>
                <div className="back"><h1>PIAMMY:</h1> We can really teach through technology. Interactive piano to kids. Used technology: Angular, Typescript, Firebase.
                  <div>
                    <a href="https://piano-app-003.firebaseapp.com/"><div className="showHover"><p>Demo</p></div></a>
                    <a href="https://github.com/BrendaVielmas/GDL003-personal-project"><div className="showHover"><p>Github</p></div></a>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      )
    }
}
  export default Projects;