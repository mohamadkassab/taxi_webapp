import React from "react";
import "./Ourtaxi.css";

var OurData = require("./ourtaxi.json");

const OurTaxi = () => {
  return (
    <div className="ourtaxi-container">
      <div className="taxi-type">
        {OurData.map((item) => {
          return (
            <div className="onetaxi-type" key={item.id}>
             <div className="content">
              <div className="front">
                <img src={item.taxiimg} alt="" />
              </div>

              <div className="back">
                <h4>{item.class}</h4>
              </div>
            </div>
        

              {/* <div className="rate">
                <h6>Class : {item.class}</h6>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTaxi;
