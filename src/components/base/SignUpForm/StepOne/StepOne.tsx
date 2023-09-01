import React, { Component } from "react";

type StepOneProps = {
  //
};

const StepOne: React.FC = () =>{

  return(

      <div className="user" style={{ height: "70%" }}>
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
      </div>


  );
}

export default StepOne;
