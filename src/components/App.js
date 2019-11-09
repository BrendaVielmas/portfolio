import React from 'react';
import ReactDOM from 'react-dom';
import '../allcss/App.css';
import Menu from './Menu';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends React.Component {
  render(){
    return (
      <Router>
				<div  className="App">
					<Route exact path="/" component={Menu}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Skills" component={Skills}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/Contact" component={Contact}/>
				</div>
			</Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
