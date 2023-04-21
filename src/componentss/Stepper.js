import React, { useState } from "react";
import "./Stepper.css";
const steps = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 ">
      <div
        className="grid grid-cols-7 grid-rows-3 gap-4

      "
      >
        {steps.map((step) => (
          <div key={step} className="relative">
            <div
              className={`    w-10 h-10 rounded-full bg-white border-2    flex justify-center items-center transition-all duration-400 ease-out ${
                activeStep >= step ? "border-purple-800" : "border-pink-200"
              }`}
            >
              {activeStep > step ? (
                <span className="text-purple-800 font-bold text-lg leading-none transform -scale-x-100 rotate-45">
                  L
                </span>
              ) : (
                <span className="text-pink-200 font-bold text-lg leading-none">
                  {step}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-16">
        <button
          className={`border border-solid rounded-md bg-gray-200 text-gray-800 font-medium py-2 px-6 transition-all duration-200 ease-out ${
            activeStep === 1 && "cursor-not-allowed opacity-50"
          }`}
          onClick={prevStep}
          disabled={activeStep === 1}
        >
          Previous
        </button>
        <button
          className={`border border-solid rounded-md bg-purple-800 text-white font-medium py-2 px-6 transition-all duration-200 ease-out
            ${activeStep === totalSteps && "cursor-not-allowed opacity-50"}`}
          onClick={nextStep}
          disabled={activeStep === totalSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
