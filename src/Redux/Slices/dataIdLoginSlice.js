import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const idLoginPersistConfig = {
  key: "dataIdLogin",
  storage: storage,
  whitelist: ["idLogin"],
};

const idLoginSlice = createSlice({
  name: "dataIdLogin",
  initialState: {
    idLogin: "",
  },
  reducers: {
    setIdLogin: (state, action) => {
      state.idLogin = action.payload;
    },

    clearIdLogin: (state) => {
      state.idLogin = "";
    },
  },
});

const persistedIdLoginReducer = persistReducer(
  idLoginPersistConfig,
  idLoginSlice.reducer
);

// const store = configureStore({
//   reducer: persistedIdLoginReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

export const selectIdLogin = (state) => state.idLogin;
export const { setIdLogin, clearIdLogin } = idLoginSlice.actions;
export default persistedIdLoginReducer;
