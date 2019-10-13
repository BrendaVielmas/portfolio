import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';

class App extends React.Component {
  render(){
    return (
      <div>
      <Home/>
      <Menu/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
