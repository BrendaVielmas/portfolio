import React from 'react';
import ReactDOM from 'react-dom';
import '../allcss/App.css';
import Menu from './Menu';
import Name from './Name';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import LastName from './LastName';
import AboutPhoto from './AboutPhoto';
import Skills from './Skills';
import ContactImg from './ContactImg';

class App extends React.Component {
  render(){
    return (
      <div style={{"overflow": "hidden"}}>
        <Menu/>
        <Name/>
        <LastName/>
        <About/>
        <AboutPhoto/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ContactImg/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
