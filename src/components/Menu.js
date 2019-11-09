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
            <div className='one'>
              <div className='otherDiv'></div>
              <div className='aboutDiv'></div>
              <Link to="/About"><div className='aboutDiv'><h1 className='componentName'>About</h1></div></Link>
              <div className='otherDiv'></div>
            </div>
            <div className='one'>
              <div className='spaceDiv'></div>
              <Link to="/Skills"><div className='skillsDiv'><h1 className='componentName'>Skills</h1></div></Link>
              <div className='aboutDiv'><h1 className='componentName'>Brenda Vielmas</h1></div>
              <Link to="/Projects"><div className='aboutDiv'><h1 className='componentName'>Projects</h1></div></Link>
            </div>
            <div className='one'>
              <div className='otherDiv'></div>
              <Link to="/Contact"><div className='aboutDiv'><h1 className='componentName'>Contact</h1></div></Link>
              <div className='aboutDiv'></div>
              <div className='otherDiv'></div>
            </div>
        </div>
      )
    }
}
  export default Menu;