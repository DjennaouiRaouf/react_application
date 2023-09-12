import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux-toolkit/store/store";
import {Code, openMessageToast} from "../../../redux-toolkit/slices/MessageToastSlice";
import { Carousel } from "react-bootstrap";

type LoginProps = {
  //
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { show,code,title,text } = useSelector((state: RootState) => state.messageToast);
  const [username,setusername]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [validated,setValidated]=useState<boolean>(false);

  const handleusernameChange = (e:any) => {
    setusername(e.target.value);
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

  const handleLogin = async (e:any) => {
    isValid(e);
    if(username !== "" && password !== ""){
      let formData:any={
        username:username,
        password:password,
        token:""
      }
      console.log(`${process.env.REACT_APP_API_BASE_URL}`)
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/authentication/login/`,formData)
          .then((response:any) => {
            dispatch(openMessageToast({code:Code.SUCCESS,title:"login",text:"Login Successful"}))
          })
          .catch((error:any) => {
            dispatch(openMessageToast({code:Code.ERROR,title:"login",text:"Wrong Username or Wrong Password "}))
          });

    }else{
      dispatch(openMessageToast({code:Code.ERROR,title:"login",text:"username or password is empty"}))
    }

  }

  return (

      <div className="container">
        <div
            className="card shadow-lg o-hidden border-0 my-5"
            style={{ height: 500 }}
        >
          <div className="card-body p-0">
            <div className="row" style={{ height: "100%" }}>
              <div
                  className="col-lg-6 d-none d-lg-flex justify-content-lg-center align-items-lg-center"
                  style={{
                    background: "#ffffff",
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6
                  }}
              >
                <Carousel >
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>



              </div>


              <div className="col-lg-6">
                <div className="p-5" style={{ height: "100%" }}>
                  <div className="text-center">
                    <h4 className="text-dark mb-4">
                      <strong>
                        <em>Login</em>
                      </strong>
                    </h4>
                  </div>

                    <Form noValidate validated={validated} >
                      <div className="mb-3">
                        <Form.Group  controlId="validationCustom01">
                          <Form.Control
                              required
                              type="text"
                              placeholder="username"
                              value={username}
                              onChange={(e)=>handleusernameChange(e)}
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

                    <div className="mb-3">
                      <div className="custom-control custom-checkbox small" />
                    </div>
                    <button
                        className="btn btn-primary d-block btn-user w-100"
                        onClick={(e)=>handleLogin(e)}
                    >
                      Login
                    </button>
                    <hr />

                  <div className="text-center" />
                  <div className="text-center">
                    <a className="small" href="#">
                      Create an Account!
                    </a>
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
