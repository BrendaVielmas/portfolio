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
            <div className='profilePhoto' data-lax-translate-x="vh -100, -elh 100" data-lax-anchor="self" data-lax-opacity="-131 0, -130 1, 608 1, 609 0">
               
                <img src={photo}/> 
            </div>
       );
    }
  }
  
 
  export default profilePhoto;