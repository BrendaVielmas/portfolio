import React from 'react';
import '../allcss/LastName.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom'
import vPhoto from '../images/Bien/v.jpg';;
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
        //data-lax-translate-x="vh 0, -elh (vw*1)" data-lax-anchor="self" style={{"backface-visibility": "hidden"}, {"transform": "translateX(351.698)"}}
        return (
            <div className='lastName' data-lax-blur="(vh) 40, (vh*0.8) 0, (vh*0.2) 0, 0 40" data-lax-anchor="self" style={{"backface-visibility": "hidden"}, {"filter": "blur(0)"}}>
                <img className='vPhoto' src={vPhoto}/> 
                <p className='realLastName'>ielmas</p>  
            </div>
       );
    }
  }
  
 
  export default LastName;