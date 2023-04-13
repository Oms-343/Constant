// import "./stepper.css";

const Stepper = () => {
  return (
    <div>
      <div className="flex ">
        {[1, 2, 3, 4].map(() => (
          <div>
            <div>
              <span>1</span>
            </div>
            <div>
              <span>Address</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
