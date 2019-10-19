import React from 'react';
import '../allcss/LastName.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';
class LastName extends React.Component {
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
    render() {
        return (
            <div className='lastName'>
               
               
                <p className='realLastName'>Vielmas</p>  
            </div>
       );
    }
  }
  
 
  export default LastName;