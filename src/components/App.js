import React from 'react';
import ReactDOM from 'react-dom';
import '../allcss/App.css';
import Menu from './Menu';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


class App extends React.Component {
 
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
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
