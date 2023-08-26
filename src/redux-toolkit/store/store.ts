import { configureStore } from "@reduxjs/toolkit";
import MessageToastReducer from "../slices/MessageToastSlice";

const store = configureStore({
    reducer: {
        messageToast: MessageToastReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
