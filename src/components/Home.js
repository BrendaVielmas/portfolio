import React from 'react';
import '../App.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';
class Home extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
  
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
  
        lax.update(window.scrollY)
    }
    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        lax.addElement(this.el)
    }
    
    componentWillUnmount() {
        lax.removeElement(this.el)
      }
    // React components are simple functions that take in props and state, and render HTML
    render() {
        return (
            <div className='bubble' data-lax-preset="leftToRight">
                <p>Brenda</p>
                <p>Vielmas</p> 
                <p>Vielmas</p> 
                <p>Vielmas</p> 
                <p>Vielmas</p>  
            </div>
       );
    }
  }
  
 
  export default Home;