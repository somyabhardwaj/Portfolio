import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export default function TypedAbout() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Somya Bhardwaj', 'a React JS Developer', 'a Web developer.'],
      typeSpeed: 100,
      loop: true, // Set loop option to true
    });

    // No need to destroy Typed instance here

    // Optionally, you can return a function to stop the looped animation
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="TypedApp">
      <p className="text-726060 wrap-text-p">Hi, I am <span className="animation_text" ref={el} /></p>
      <p className="text-726060 wrap-text-p2">Please <span className="wrap-text-p3"> <a className="text-white " href="#About">click</a></span>  here 
      to find more<br/><br/> about me!!</p>
    </div>
  );
}

