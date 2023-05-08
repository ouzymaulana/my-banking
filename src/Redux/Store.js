import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/dataUsersSlice";

const store = configureStore({
  reducer: {
    dataUsers: UserReducer,
  },
  devTools: true,
});

export default store;
