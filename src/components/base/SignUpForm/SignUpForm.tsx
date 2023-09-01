import React, {useState} from "react";
import Stepper from "../Stepper";
import QRCode from 'qrcode.react';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

type SignUpFormProps = {
  //
};

const SignUpForm: React.FC = () => {

    const steps = [
        { title: 'Create User', content: <StepOne/> },
        { title: 'Step 2', content: <StepTwo/> },
        { title: 'Step 3', content: <p>Content for Step 3</p> },
    ];
    return (
        <Stepper steps={steps} />

    );
}

export default SignUpForm;
