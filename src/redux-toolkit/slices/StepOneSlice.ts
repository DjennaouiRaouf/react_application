import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface StepOneState {
    uuid:string;

}

const initialState: StepOneState = {
    uuid:""

};

export const StepOneSlice = createSlice({
    name: "StepOne",
    initialState,
    reducers: {
        setUUID: (state, action: PayloadAction<string>) => {
            state.uuid=action.payload;
        },
        reset: (state) => initialState,

    }
});

// Action creators are generated for each case reducer function
export const { setUUID,reset} = StepOneSlice.actions;

export default StepOneSlice.reducer;
