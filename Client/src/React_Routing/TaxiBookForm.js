import React from "react";
import TaxiForm from "./Form/TaxiForm";
import "./taxibookform.css";
import Type from "./HOME/Type";

const TaxiBookForm = () => {
  return (
    <div>
      <div className="typewriter" id="form">
        <h3>
          <Type />
        </h3>
      </div>
      <TaxiForm />
      <div className="map-container"></div>
    </div>
  );
};

export default TaxiBookForm;
