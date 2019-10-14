import React from 'react';
import '../allcss/About.css';

class About extends React.Component {

    render(){
      return (
        <div className="About" id="aboutSection">
            <h1>about</h1>
            <div className="intro">
            <p>I'm a Front-end Developer with a degree in Human Resources. 
              What's the relation between both? Well, maybe you thing it's nothing, 
              but I think the best way for know the best part of a human it's through the computer, 
              that's why I decided to take a bootcamp for 6 months with specialization in Front-end with Javascript 
              (mostly). Do you want to know more about me? 
            </p>
            <p>I'm an organized, empathic, friendly and creative girl that doesn't see a limit in keep learning. 
              Really, if I want learn it, I learn it. 
              I love concerts, cats, dogs, going to the cinema, traveling, listening to music, 
              reading a good book or talking with good friends, and even fixing the bugs in my code.
            </p>
            <p>So, check my work!</p>
            </div>
            
        </div>
      )
    }
}
  export default About;