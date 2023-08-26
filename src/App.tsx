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

function App() {
    const dispatch = useDispatch();
    const { show,code,title,text } = useSelector((state: RootState) => state.messageToast);

    return (
    <div className="App">
     <NavigationBar/>

    <Footer/>
        <Button onClick={()=>dispatch(openMessageToast({code:10,text:"warning"}))}> Toast</Button>
        <MessageToast/>
    </div>
  );
}

export default App;
