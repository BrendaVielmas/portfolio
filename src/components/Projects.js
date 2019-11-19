import React from 'react';
import '../allcss/Projects.css';


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
                <div className="front"><img src="https://www.himgs.com/imagenes/hola/comunes/hola-2017.gif"></img></div>
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
                <div className="front"></div>
                <div className="back"><h1>ECOstep:</h1> the best social network to change, buy or recommendate things about the ecology.
                  <div>
                    <div className="showHover demo"><a href="https://brendavielmas.github.io/GDL003-social-network/src/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-social-network"><p>Github</p></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-container">
              <div className="hexagon">
                <div className="front"></div>
                <div className="back"><h1>Nekoffee</h1> Ready to order? A sistem to do request in a Restaurant.
                  <div>
                    <div className="showHover demo"><a href="https://gdl003-burger-queen-front-end.brendavielmas.now.sh/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-Burger-Queen-Back-End"><p>Github</p></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-container">
              <div className="hexagon">
              <div className="front"></div>
                <div className="back"><h1>Piammy:</h1> We can really teach through technology. Interactive piano to kids.
                  <div>
                    <div className="showHover demo"><a href="https://gdl003-burger-queen-front-end.brendavielmas.now.sh/"><p>Demo</p></a></div>
                    <div className="showHover github"><a href="https://github.com/BrendaVielmas/GDL003-Burger-Queen-Back-End"><p>Github</p></a></div>
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