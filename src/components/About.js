import React from 'react';
import '../allcss/About.css';
import lax from 'lax.js';
import ReactDOM from 'react-dom';

class About extends React.Component {
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
        <div data-lax-translate-y="vh*2 -200, 0 0" data-lax-anchor="self" className="About" id="aboutSection">

 
            <h1 >about</h1>
            <p className="intro">I am a Front-end Developer with a degree in Human Resources. You might wonder, what's the relationship
              between both? It may seem like nothing but I believe the best way to know a human being is through
              a computer. This is why I enrolled in a bootcamp for 6 months with specialization in Front-end with Javascript 
              (mostly). Do you want to know more about me? 
            </p>
            <p className="intro">I am an organized, empathic, friendly and creative woman who doesn't see a limit when learning. 
              Really, if I want learn it, I learn it. 
              I love concerts, cats, dogs, going to the cinema, traveling, listening to music, 
              reading a good book or talking with good friends, and especially fixing the bugs in my code.
            </p>
            <p className="intro">So, check my work!</p>
        </div>
      )
    }
}
  export default About;