import React from 'react';
import Menu from './Menu';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


class Particles extends React.Component {
  

    render(){
      return (
        <div>
            <Menu/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
      )
    }
}
  export default Particles;