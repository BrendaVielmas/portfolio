import React from 'react';
import lax from 'lax.js';
import photo from '../images/profile.jpg';
import ReactDOM from 'react-dom';
class profilePhoto extends React.Component {
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
             //data-lax-anchor="self" data-lax-rotate="(vh) 0, (-elh) 402"
             <div >
                 <img className='profilePhoto' src={photo}/> 
             </div>
                

               
            
       );
    }
  }
  
 
  export default profilePhoto;