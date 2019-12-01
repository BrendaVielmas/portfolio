import React from 'react';
import ReactDOM from 'react-dom';
import '../allcss/App.css';
import Particles from 'react-particles-js';
import Particles2 from './Particles.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }
  
  render(){

    return (
      <div>
        <Particles 
        params={{
          
          "particles": {
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "color":{
                "value":"ffdf00"
              },
              "size": {
                  "value": 4,
                  "random": true,
                  "anim": {
                      "speed": 4,
                      "size_min": 0.3
                  }
              },
              "shape":{
                "type": "polygon",
                
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "size": 0,
                      "opacity": 0
                  },
                  "repulse": {
                      "distance": 400,
                      "duration": 4
                  }
              }
          }
      }} ></Particles>
      <Particles2/>
      </div>
      
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
