import React from 'react';
import '../App.css';

class Menu extends React.Component {

    render(){
      return (
        <div className="Menu">
            <button>About</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
      )
    }
}
  export default Menu;