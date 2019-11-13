import React from 'react';
import '../allcss/Contact.css';
import GithubLogo from '../images/Contact/github.png';
import GmailLogo from '../images/Contact/gmail.png';
import LinkedInLogo from '../images/Contact/linkedin.png';
import lax from 'lax.js';
import ReactDOM from 'react-dom'

class Contact extends React.Component {
  

    render(){
      return (
     
        <div className="Contact" id="contactSection">
          <h1>contact</h1>
          <div className='contactCard'><div><img src={GithubLogo}/></div><p>github.com/BrendaVielmas</p></div>
          <div className='contactCard'><div><img src={GmailLogo}/></div><p>bren@vielmas.com</p></div>
          <div className='contactCard'><div><img src={LinkedInLogo}/></div><p>linkedin.com/in/brendavielmas</p></div>
          <div className='contactLine' />
        </div>
         
      )
    }
}
  export default Contact;