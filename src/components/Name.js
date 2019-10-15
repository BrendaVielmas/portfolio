import React from 'react';
import '../allcss/Name.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';
class Name extends React.Component {
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
            <div className='homeName' data-lax-translate-x="vh -100, -elh 100" data-lax-anchor="self" data-lax-opacity="-131 0, -130 1, 608 1, 609 0">
                <p>Brenda</p>
                
            </div>
       );
    }
  }
  
 
  export default Name;