import React from "react";
import Stepper from "../Stepper";

type SignUpFormProps = {
  //
};

const SignUpForm: React.FC = () => {
    const steps = [
        { title: 'Step 1', content: <p>Content for Step 1</p> },
        { title: 'Step 2', content: <p>Content for Step 2</p> },
        { title: 'Step 3', content: <p>Content for Step 3</p> },
    ];
    return (
        <Stepper steps={steps} />
    );
}

export default SignUpForm;
