import React from "react";
import contents from "./contents";
import Typed from 'typed.js';
import '../../addon.css';

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: contents,
      typeSpeed: 25,
      backSpeed: 50,
      loop: true,
      cursorChar: "",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <div className="bubble h-20 bg-white rounded-lg sm:rounded-br-lg sm:rounded-bl-lg sm:rounded-tr-lg flex justify-center items-center py-4 px-4 sm:p-5">
        <span
          className=" font-fontMain text-sm sm:text-xl"
          ref={(el) => {
            this.el = el;
          }}
        />
      </ div>
    );
  }
}
export default Typing;