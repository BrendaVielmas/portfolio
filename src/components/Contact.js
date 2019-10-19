import React from 'react';
import '../allcss/Contact.css';
import GithubLogo from '../images/Contact/github.jpg';
import GmailLogo from '../images/Contact/gmail.png';
import LinkedInLogo from '../images/Contact/linkedin.png';

class Contact extends React.Component {

    render(){
      return (
        <div className="Contact" id="contactSection">
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