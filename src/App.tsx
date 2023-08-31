import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/base/NavigationBar";
import Footer from "./components/base/Footer";
import MessageToast from "./components/base/MessageToast";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux-toolkit/store/store";
import {openMessageToast} from "./redux-toolkit/slices/MessageToastSlice";
import Login from "./components/base/Login";
import SignUpForm from "./components/base/SignUpForm";

function App() {
    const dispatch = useDispatch();
    const { show,code,title,text } = useSelector((state: RootState) => state.messageToast);

    return (
    <div className="App">

        <SignUpForm/>


    </div>
  );
}

export default App;
