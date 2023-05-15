import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import UserReducer from "./Slices/dataUsersSlice";
import IdReducer from "./Slices/dataIdLoginSlice";
import persistedMutasiRekeningReducer from "./Slices/mutasiRekeningSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const store = configureStore({
  reducer: {
    dataUsers: UserReducer,
    dataIdlogin: IdReducer,
    mutasiRekening: persistedMutasiRekeningReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
