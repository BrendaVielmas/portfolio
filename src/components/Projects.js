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
          <h1>projects</h1>
          <div>
            <div className="flip-container">
              <div className="hexagon" >
                <div className="front"><img src={Note}></img></div>
                <div className="back"><h1>NOT-E:</h1> a very friendly app to save all your notes.
                  <div>
                    <div className="showHover demo"><a href="https://brendavielmas.github.io/GDL003-lab-notes/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-lab-notes"><p>Github</p></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-container">
              <div className="hexagon">
                <div className="front"><img src={Econix}></img></div>
                <div className="back"><h1>ECONIX:</h1> the best social network to change, buy or recommendate things about the ecology.
                  <div>
                    <div className="showHover demo"><a href="https://brendavielmas.github.io/Social-Network/src/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/Social-Network"><p>Github</p></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-container">
              <div className="hexagon">
                <div className="front"><img src={Neko}></img></div>
                <div className="back"><h1>NEKOFFEE</h1> Ready to order? A sistem to do request in a Restaurant.
                  <div>
                    <div className="showHover demo"><a href="https://gdl003-burger-queen-front-end.brendavielmas.now.sh/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-Burger-Queen-Back-End"><p>Github</p></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-container">
              <div className="hexagon">
              <div className="front"><img src={Piammy}></img></div>
                <div className="back"><h1>PIAMMY:</h1> We can really teach through technology. Interactive piano to kids.
                  <div>
                    <div className="showHover demo"><a href="https://piano-app-003.firebaseapp.com/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-personal-project"><p>Github</p></a></div>
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