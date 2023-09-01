import { configureStore } from "@reduxjs/toolkit";
import MessageToastReducer from "../slices/MessageToastSlice";
import LoginReducer from "../slices/LoginSlice";
import StepOneReducer from "../slices/StepOneSlice";

const store = configureStore({
    reducer: {
        messageToast: MessageToastReducer,
        login:LoginReducer,
        stepOne:StepOneReducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
