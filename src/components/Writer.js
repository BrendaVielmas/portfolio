import React from 'react';
import '../allcss/Writer.css';
import Typed from 'typed.js';

class Writer extends React.Component {
    constructor(props) {
        super(props);
        const { title } = this.props;
        this.state = { title: title };
    }
    componentDidMount() {
      
      const { strings, title } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
      };
      this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="wrap">
          <h1>{this.state.title}</h1>
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      );
    }
  }
  
  export default Writer;