import React from 'react';
import '../allcss/Contact.css';
import GithubLogo from '../images/Contact/github.jpg';
import GmailLogo from '../images/Contact/gmail.png';
import LinkedInLogo from '../images/Contact/linkedin.png';
import lax from 'lax.js';
import ReactDOM from 'react-dom'

class Contact extends React.Component {
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
        
        <div data-lax-skew-y="(vh) -30, -elh 40" data-lax-anchor="self" className="Contact" id="contactSection">
            <h1>contact</h1>
            <table className="contactTable">
              <tr className="github">
                <td><img className="imgContact" src={GithubLogo}/></td><p className="link">github.com/BrendaVielmas</p>
              </tr>
              <tr className="gmail">
                <td><img className="imgContact" src={GmailLogo}/></td><p className="link">bren@vielmas.com</p>
              </tr>
              <tr className="linkedin">
                <td><img className="imgContact" src={LinkedInLogo}/></td><p className="link">linkedin.com/in/brendavielmas</p>
              </tr>
            </table>
         
        </div>
         
      )
    }
}
  export default Contact;