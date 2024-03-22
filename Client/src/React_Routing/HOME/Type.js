import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div>
       <Typewriter
       options={{
        autoStart: true,
        loop: true,
      }}
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome To Black horse transportation")
       .pauseFor()
       .deleteAll()
       .typeString("Book Your Ride ")
       .start();
       }}
       />
    </div>
  )
}

export default Type