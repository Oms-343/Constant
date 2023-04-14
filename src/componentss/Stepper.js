import React, { useState } from "react";
import cn from "classnames";

const steps = [
  {
    label: "Address",
    step: 1,
  },
  {
    label: "Shipping",
    step: 2,
  },
  {
    label: "Payment",
    step: 3,
  },
  {
    label: "Summary",
    step: 4,
  },
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
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex justify-between mt-14 relative">
        <div
          className="absolute bg-pink-200 h-1 w-full top-1/2 transform -translate-y-1/2 left-0"
          style={{ zIndex: -1 }}
        />
        <div
          className="absolute bg-purple-800 h-1 transition-all duration-400 ease-out top-1/2 transform -translate-y-1/2 left-0"
          style={{ width }}
        />
        {steps.map(({ step, label }) => (
          <div key={step} className="relative">
            <div
              className={cn(
                "w-10 h-10 rounded-full bg-white border-3 border-solid flex justify-center items-center transition-all duration-400 ease-out",
                activeStep >= step ? "border-purple-800" : "border-pink-200"
              )}
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
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
              <span className="text-gray-800 text-sm">{label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-16">
        <button
          className={cn(
            "border border-solid rounded-md bg-gray-200 text-gray-800 font-medium py-2 px-6 transition-all duration-200 ease-out",
            { "cursor-not-allowed opacity-50": activeStep === 1 }
          )}
          onClick={prevStep}
          disabled={activeStep === 1}
        >
          Previous
        </button>
        <button
          className={cn(
            "border border-solid rounded-md bg-purple-800 text-white font-medium py-2 px-6 transition-all duration-200 ease-out",
            { "cursor-not-allowed opacity-50": activeStep === totalSteps }
          )}
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
