import React from "react";
import Stepper from "../Stepper";
import QRCode from 'qrcode.react';

type SignUpFormProps = {
  //
};

const SignUpForm: React.FC = () => {
    const CreateUser: React.FC = () =>{
        return(
            <form className="user" style={{ height: "70%" }}>
                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <input
                        id="exampleInputEmail-1"
                        className="form-control form-control-user"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <input
                        id="exampleInputPassword"
                        className="form-control form-control-user"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <div className="mb-3">
                    <input
                        id="exampleInputPassword-1"
                        className="form-control form-control-user"
                        type="password"
                        placeholder="Confirm Password"
                        name="password"
                    />
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input id="formCheck-1" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-1">
                            Enable 2FA
                        </label>
                    </div>
                </div>
            </form>


        );
    }

    const Enable2FA: React.FC = () =>{
        return(
            <form className="user" style={{ height: "70%" }}>
                <div className="mb-3" style={{ height: "90%" }}>
                    <QRCode value={"NYUEJRJLTBJKN63Y3ZYEFHCUWORE2DZS"} />
                </div>
                <label className="form-label">Scan this Qr Code with Google Auth</label>
            </form>

        );
    }


    const steps = [
        { title: 'Create User', content: <CreateUser/> },
        { title: 'Step 2', content: <Enable2FA/> },
        { title: 'Step 3', content: <p>Content for Step 3</p> },
    ];
    return (
        <Stepper steps={steps} />
    );
}

export default SignUpForm;
