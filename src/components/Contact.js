import React from 'react';
import '../allcss/Contact.css';
import GithubLogo from '../images/Contact/github.png';
import GmailLogo from '../images/Contact/gmail.png';
import LinkedInLogo from '../images/Contact/linkedin.png';


class Contact extends React.Component {
  

    render(){
      return (
     
        <div className="Contact" id="contactSection">
          <h1>contact</h1>
          <div>
            <div className='contactCard'><div><a href="https://github.com/BrendaVielmas"><img src={GithubLogo}/></a></div></div>
            <div className='contactCard'><div><a href="mailto:bren@vielmas.com"><img src={GmailLogo}/></a></div></div>
            <div className='contactCard'><div><a href="https://linkedin.com/in/brendavielmas"><img src={LinkedInLogo}/></a></div></div>
          </div>
          
        </div>
         
      )
    }
}
  export default Contact;