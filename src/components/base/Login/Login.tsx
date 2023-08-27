import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import cosider from "./cosider.jpg"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux-toolkit/store/store";
import {Code, openMessageToast} from "../../../redux-toolkit/slices/MessageToastSlice";

type LoginProps = {
  //
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { show,code,title,text } = useSelector((state: RootState) => state.messageToast);
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [validated,setValidated]=useState<boolean>(false);

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  }
  const isValid = (e:any) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleLogin = (e:any) => {
    isValid(e);
    if(email !== "" && password !== ""){
      dispatch(openMessageToast({code:Code.SUCCESS,title:"Login",text:"loggin sucessfull"}))
    }else{
      dispatch(openMessageToast({code:Code.ERROR,title:"login",text:"email or password is not valid"}))
    }

  }

  return (
      <div
          className="d-flex d-xl-flex align-items-center align-items-xl-center"
          style={{ width: "100%", height: "100%" }}
      >
          <div className="container">
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
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h4 className="text-dark mb-4">Welcome back!</h4>
                          </div>
                          <div className="user">
                            <>
                              <Form noValidate validated={validated} >
                                <div className="mb-3">
                                  <Form.Group  controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e)=>handleEmailChange(e)}
                                    />
                                  </Form.Group>
                                </div>
                                <div className="mb-3">
                                  <Form.Group  controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="Password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e)=>handlePasswordChange(e)}
                                    />

                                  </Form.Group>
                                </div>
                              </Form>
                            </>
                            <button
                                className="btn btn-primary d-block btn-user w-100"
                                type="submit"
                                style={{ background: "#df162c", borderColor: "#df162c" }}
                                onClick={(e)=>handleLogin(e)}
                            >
                              Login
                            </button>
                            <div className="mb-3">
                              <div className="custom-control custom-checkbox small" />
                            </div>
                            <hr />
                            <hr />
                          </div>
                          <div className="text-center">
                            <a
                                className="small"
                                href="forgot-password.html"
                                style={{ color: "#df162c" }}
                            >
                              Forgot Password?
                            </a>
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

}

export default Login;
