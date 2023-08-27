import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface LoginState {
    uuid:string;

}

const initialState: LoginState = {
    uuid:""

};

export const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        setUUID: (state, action: PayloadAction<string>) => {
            state.uuid=action.payload;
        },
        reset: (state) => initialState,

    }
});

// Action creators are generated for each case reducer function
export const { setUUID,reset} = LoginSlice.actions;

export default LoginSlice.reducer;
