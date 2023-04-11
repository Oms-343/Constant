import React from "react";
import "./Stepper.css";
import { useState } from "react";

const Stepper = () => {
  const [complete, setComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <p>✔</p> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;
