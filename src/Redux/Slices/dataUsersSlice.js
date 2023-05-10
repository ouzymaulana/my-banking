import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dataUsersPersistConfig = {
  key: "dataUsers",
  storage: storage,
  whitelist: ["dataUsers"],
  // whitelist: ["dataUsers", "idLogin"],
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    dataUsers: [],
  },
  reducers: {
    setDataUsers: (state, action) => {
      state.dataUsers = action.payload;
      // if (Array.isArray(state.dataUsers) !== 0) {
      // state.dataUsers = [...state.dataUsers, { ...action.payload }];
      //   console.log("belum ada");
      // } else {
      //   state.dataUsers = action.payload;
      //   console.log("sudah ada");
      // }
    },

    setInvalidLoginValue: (state, action) => {
      const itemIndex = state.dataUsers.findIndex(
        (item) => item.id === action.payload
      );

      if (state.dataUsers[itemIndex].invaliLogin < 3) {
        state.dataUsers[itemIndex].invaliLogin += 1;
      }
    },

    updateBalance: (state, action) => {
      const id = Cookies.get("idEnterCard");
      console.log(action.payload);
      console.log(id);
      const itemIndex = state.dataUsers.findIndex((item) => item.id == id);
      if (state.dataUsers[itemIndex].saldo > action.payload) {
        state.dataUsers[itemIndex].saldo -= action.payload;
      }
    },
  },
});

const persistedDataUserReducer = persistReducer(
  dataUsersPersistConfig,
  userSlice.reducer
);

export const selectDataUser = (state) => state.dataUsers;
export const { setDataUsers, setInvalidLoginValue, updateBalance } =
  userSlice.actions;
export default persistedDataUserReducer;
