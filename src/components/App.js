import React from 'react';
import ReactDOM from 'react-dom';
import '../allcss/App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import LastName from './LastName';

class App extends React.Component {
  render(){
    return (
      <div>
      <Menu/>
      <Home/>
      <LastName/>
      <About/>
      <Projects/>
      <Contact/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
