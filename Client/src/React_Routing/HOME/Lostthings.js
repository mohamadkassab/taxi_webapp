import React from "react";
import "./lostthing.css";


const Lostthings = () => {


  return (
    <div className="lost-container">
      <h4>Lost Things</h4>
      <p>Did you lost something in one of our taxis?</p>
      <div className="img-container">
        <div>
          <img src={"./drivers/step1.jpg"} alt="" />
          <h6>1.remember when did you lose it</h6>
        </div>
        <div>
          <img src={"./drivers/step2.jpg"} alt="" />
          <h6>2.contact us via email or call us</h6>
        </div>
        <div>
          <img src={"./drivers/step3.jpg"} alt="" />
          <h6>3.come to our storage and pick your item</h6>
        </div>
      </div>
    </div>
  );
};

export default Lostthings;
