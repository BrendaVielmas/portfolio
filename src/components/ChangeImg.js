import React from 'react';
import '../allcss/ChangeImg.css';
import iceLogo from '../images/Bien/icecream2.png';
import lax from 'lax.js';
import ReactDOM from 'react-dom'

class ChangeImg extends React.Component {
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
       //data-lax-translate-x="100 100, 0 -500" data-lax-anchor="self"
        <div data-lax-translate-x="0 -vw, -500 0, -900 vw" data-lax-anchor="self">
                 <img className='icePhoto' src={iceLogo}/> 
             </div>
      )
    }
}
  export default ChangeImg;