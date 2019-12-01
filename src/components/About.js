import React from 'react';
import '../allcss/About.css';
import photo from '../images/profile.jpg';

class About extends React.Component {
 

    render(){
      return (
        <div className="aboutComponent" id="aboutSection">
          <div data-aos='fade-right' className="imgSec">
            <h1 data-aos='fade-down'>About</h1>
            <img src={photo}/> 
          </div>
          <div  className='content'>
            <p data-aos='fade-down'>I am a Front-end Developer with a degree in Human Resources. You might wonder, what's the relationship
              between both? It may seem like nothing but I believe the best way to know a human being is through
              a computer. This is why I enrolled in a bootcamp for 6 months with specialization in Front-end with Javascript 
              (mostly). Do you want to know more about me? 
            </p>
            <p data-aos='fade-down'>I am an organized, empathic, friendly and creative woman who doesn't see a limit when learning. 
              Really, if I want to learn it, I learn it. 
              I love concerts, cats, dogs, going to the cinema, traveling, listening to music, 
              reading a good book or talking with good friends, and especially fixing the bugs in my code.
            </p>
            <p data-aos='fade-down'>So, check my work!</p>
          </div>
          <a href="https://linkedin.com/in/brendavielmas">
          <div  data-aos='fade-up' class="wrapper">
            <div class="card">
              <h1>
                <span class="enclosed"><a>More about</a></span><a> Me</a>
              </h1>
            </div>
          </div>
          </a>
        </div>
        
      )
    }
}
  export default About;