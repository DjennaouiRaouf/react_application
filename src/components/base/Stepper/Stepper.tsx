import React, { useState } from 'react';
import cosider from './cosider.jpg';
interface Step {
  title: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (


      <div
          className="d-flex d-xl-flex align-items-center align-items-xl-center"
          style={{ width: "100%", height: "100%",marginBottom:"100px" }}
      >
        <div className="container" style={{ height: "503.5px" }}>
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-flex">
                      <div
                          className="flex-grow-1 bg-login-image"
                          style={{
                            background:
                                'url('+cosider+') center / cover no-repeat'
                          }}
                      />
                    </div>
                    <div className="col-lg-6" style={{ height: "538.5px" }}>
                      <div className="p-5" style={{ height: "430.5px" }}>
                        <div className="text-center">
                          <h4 className="text-dark mb-4">Sign Up !</h4>
                        </div>
                        <hr />
                        <form className="user">
                          {steps[currentStep].content}
                          <hr />
                        </form>
                        <div className="row" style={{ height: 50, marginBottom: 25 }}>
                          <div className="col" style={{ marginTop: 10 }}>
                            {currentStep > 0 &&
                                <button
                                    className="btn btn-primary btn-user w-50"
                                    onClick={prevStep}
                                        style={{background: "#df162c", borderColor: "#df162c"}}
                                >
                                  Previous
                                </button>
                            }

                          </div>
                          <div className="col" style={{ marginTop: 10 }}>
                            {currentStep < steps.length - 1 &&
                                <button
                                    className="btn btn-primary  btn-user w-50"
                                    onClick={nextStep}
                                    style={{background: "#df162c", borderColor: "#df162c"}}
                                >
                                  Next
                                </button>


                            }
                            {currentStep === steps.length - 1 &&
                                <button
                                    className="btn btn-primary  btn-user w-50"
                                    onClick={nextStep}
                                    style={{background: "#df162c", borderColor: "#df162c"}}
                                >
                                  Validate
                                </button>
                            }



                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








  );
};

export default Stepper;
