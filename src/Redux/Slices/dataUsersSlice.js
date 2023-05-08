import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dataUsersPersistConfig = {
  key: "dataUser",
  storage: storage,
  whitelist: ["dataUsers"],
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    dataUsers: [],
  },
  reducers: {
    setDataUsers: (state, action) => {
      if (Array.isArray(state.dataUsers) !== 0) {
        // state.dataUsers = [...state.dataUsers, { ...action.payload }];
        state.dataUsers = action.payload;
        console.log("belum ada");
      } else {
        state.dataUsers = action.payload;
        console.log("sudah ada");
      }
    },
  },
});

const persistedDataUserReducer = persistReducer(
  dataUsersPersistConfig,
  userSlice.reducer
);

export const selectDataUser = (state) => state.dataUsers;
export const { setDataUsers } = userSlice.actions;
export default persistedDataUserReducer;
