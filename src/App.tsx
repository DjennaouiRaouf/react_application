import React from 'react';

import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux-toolkit/store/store";
import Login from "./components/base/Login";
import MessageToast from "./components/base/MessageToast";
import TwoFactorAuth from "./components/base/TwoFactorAuth";

function App() {
    const dispatch = useDispatch();
    const { show,code,title,text } = useSelector((state: RootState) => state.messageToast);

    return (
    <div className="App">

        <Login/>
<MessageToast/>
        <TwoFactorAuth/>

    </div>
  );
}

export default App;
