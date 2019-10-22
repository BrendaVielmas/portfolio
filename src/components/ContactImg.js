import React from 'react';
import '../allcss/ContactImg.css';
import phoneLogo from '../images/Bien/phone-Paul-Fuentes.png';
import lax from 'lax.js';
import ReactDOM from 'react-dom'

class ContactImg extends React.Component {
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

    render(){
      return (
       
        <div data-lax-translate-x="vh*1 500, (vh*2.8) 500, 0 -500" data-lax-anchor="self" >
                 <img className='phonePhoto' src={phoneLogo}/> 
             </div>
      )
    }
}
  export default ContactImg;