import React, {useState} from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux-toolkit/store/store";
import {closeMessageToast, Code} from "../../../redux-toolkit/slices/MessageToastSlice";
type MessageToastProps = {
  //
};

const MessageToast: React.FC = () => {
    const dispatch = useDispatch();
    const { show,code,title,text } = useSelector((state: RootState) => state.messageToast);

    return(
        <ToastContainer  className="p-3" style={{  position: "fixed", bottom: "20px", right: "30px",zIndex:1 }}>
        <Toast onClose={() => dispatch(closeMessageToast())} show={show} delay={3000} autohide >
            <Toast.Header>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ fontSize:25, marginRight:3, color:code}}

                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 5V13C18 14.1046 17.1046 15 16 15H11L6 19V15H4C2.89543 15 2 14.1046 2 13V5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5ZM7 8H5V10H7V8ZM9 8H11V10H9V8ZM15 8H13V10H15V8Z"
                        fill="currentColor"
                    />
                </svg>
                <strong className="me-auto" style={{color:code}}>{title}</strong>

            </Toast.Header>

            <Toast.Body style={{background:'#fff',color:code}}>{text}</Toast.Body>
        </Toast>
        </ToastContainer>
    );
}

export default MessageToast;
