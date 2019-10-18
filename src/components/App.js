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

class App extends React.Component {
  render(){
    return (
      <div>
      <Menu/>
      <Name/>
      <LastName/>
      <About/>
      <AboutPhoto/>
      <Projects/>
      <Contact/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
