import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface MessageToastState {
    show: boolean;
    code:number;
    title:string;
    text:string;

}

const initialState: MessageToastState = {
    show: false,
    code:0,
    title:"",
    text:""

};

export const MessageToastSlice = createSlice({
    name: "MessageToast",
    initialState,
    reducers: {
        openMessageToast: (state, action: PayloadAction<{ code: number;text:string }>) => {
            state.show=true;
            state.title="Warning";
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
