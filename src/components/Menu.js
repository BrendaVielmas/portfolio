import React from 'react';
import '../allcss/Menu.css';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  
  }
 
    render(){
      return (
        
        <div className="Menu">
          <div className="name"><h1> Brenda Vielmas </h1>
          </div>
          <div className="hexagon">
            <div className='one'>
                <div className='aboutDiv'></div>
                <Link to="/About"><div className='aboutDiv'><h1 className='componentName'>About</h1></div></Link>
              </div>
              <div className='two'>
                <Link to="/Skills"><div className='skillsDiv'><h1 className='componentName'>Skills</h1></div></Link>
                <div className='aboutDiv'></div>
                <Link to="/Projects"><div className='aboutDiv'><h1 className='componentName'>Projects</h1></div></Link>
              </div>
              <div className='one'>
                <Link to="/Contact"><div className='aboutDiv'><h1 className='componentName'>Contact</h1></div></Link>
                <div className='aboutDiv'></div>
              </div>
          </div>
        </div>
      )
    }
}
  export default Menu;