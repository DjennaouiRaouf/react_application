import React, { Component } from "react";
import QRCode from "qrcode.react";

type StepTwoProps = {
  //
};

const StepTwo: React.FC = () =>{
  return(
      <div className="user" style={{ height: "70%" }}>
        <div className="mb-3">
          <QRCode value={"otpauth://totp/codepython.com:rdjennaoui?secret=NYUEJRJLTBJKN63Y3ZYEFHCUWORE2DZS&issuer=codepython.com"}
                  style={{width:"60%",height:"60%" }}
          />
        </div>
        <label className="form-label">Scan this Qr Code with Google Auth</label>
      </div>

  );
}

export default StepTwo;
