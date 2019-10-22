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
             // data-lax-translate-y="0 0, vh -vw | speed=0.25">
        
            <div className='homeName' data-lax-blur="(vh) 40, (vh*0.8) 0, (vh*0.2) 0, 0 40" data-lax-anchor="self" style={{"backface-visibility": "hidden"}, {"filter": "blur(0)"}}>
           
                <p className='realName' >Brenda</p>
               
            </div>
       );
    }
  }
  
 
  export default Name;