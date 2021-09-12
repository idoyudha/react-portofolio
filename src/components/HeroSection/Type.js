import React from 'react';
import Typewriter from "typewriter-effect";

function Type() {
    return (
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Full Stack Developer",
            "Full Time Learner",
            "Traveler",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    );
  }
  
  export default Type;