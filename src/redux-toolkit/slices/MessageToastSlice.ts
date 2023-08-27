import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface MessageToastState {
    show: boolean;
    code:Code;

    title:string;
    text:string;

}

export enum Code {
    ERROR="#df4654",
    SUCCESS="#198754",
    NULL="none"
}

const initialState: MessageToastState = {
    show: false,
    code:Code.NULL,
    title:"",
    text:""

};

export const MessageToastSlice = createSlice({
    name: "MessageToast",
    initialState,
    reducers: {
        openMessageToast: (state, action: PayloadAction<{ code: Code;title:string;text:string }>) => {
            state.show=true;
            state.title=action.payload.title;
            state.code=action.payload.code;
            state.text=action.payload.text;
        },
        closeMessageToast: (state) => initialState,

    }
});

// Action creators are generated for each case reducer function
export const { openMessageToast,
    closeMessageToast } = MessageToastSlice.actions;

export default MessageToastSlice.reducer;
