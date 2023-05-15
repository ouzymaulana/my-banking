import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dataUsersPersistConfig = {
  key: "dataUsers",
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
      state.dataUsers = action.payload;
    },

    setInvalidLoginValue: (state, action) => {
      const itemIndex = state.dataUsers.findIndex(
        (item) => item.id === action.payload
      );

      if (state.dataUsers[itemIndex].invaliLogin < 3) {
        state.dataUsers[itemIndex].invaliLogin += 1;
        if (state.dataUsers[itemIndex].invaliLogin === 3) {
          // state.dataUsers[itemIndex].invalidLoginTime = new Date();
          const currentTime = new Date();
          // const oneHourAhead = new Date(currentTime.getTime() + 60 * 60 * 1000); // Menambahkan 1 jam (60 menit * 60 detik * 1000 milidetik)
          const oneHourAhead = new Date(currentTime.getMinutes() + 1);

          state.dataUsers[itemIndex].invalidLoginTime = oneHourAhead;
        }
      }
    },

    deleteInvalidLoginTimeValue: (state, action) => {
      state.dataUsers = state.dataUsers.map((user) => {
        if (user.id === action.payload) {
          return { ...user, invaliLogin: 0, invalidLoginTime: null };
        }
        return user;
      });
    },

    updateBalance: (state, action) => {
      const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;

      state.dataUsers = state.dataUsers.map((user) => {
        if (user.id == id) {
          let saldoAwal = parseInt(user.saldo);
          const jumlahPenarikan = parseInt(action.payload);
          const saldoAkhir = saldoAwal - jumlahPenarikan;
          return { ...user, saldo: saldoAkhir };
        }
        return user;
      });
    },

    incrementBalance: (state, action) => {
      // const id = Cookies.get("idEnterCard");
      const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;

      const itemIndex = state.dataUsers.findIndex((item) => item.id == id);
      const saldoAwal = parseInt(state.dataUsers[itemIndex].saldo);
      const jumlahSetoran = parseInt(action.payload);

      state.dataUsers[itemIndex].saldo = saldoAwal + jumlahSetoran;
    },

    handleTransfer: (state, action) => {
      const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;

      state.dataUsers = state.dataUsers.map((user) => {
        if (user.nomor == action.payload.rekeningTujuan) {
          let saldoAwal = parseInt(user.saldo);
          const jumlahTransfer = parseInt(action.payload.jumlahTransfer);
          const saldoAkhir = saldoAwal + jumlahTransfer;
          return { ...user, saldo: saldoAkhir };
        }
        if (user.id === id) {
          let saldoAwal = parseInt(user.saldo);
          const jumlahTransfer = parseInt(action.payload.jumlahTransfer);
          const saldoAkhir = saldoAwal - jumlahTransfer;
          return { ...user, saldo: saldoAkhir };
        }
        return user;
      });
    },
  },
});

const persistedDataUserReducer = persistReducer(
  dataUsersPersistConfig,
  userSlice.reducer
);

export const selectDataUser = (state) => state.dataUsers;
export const selectSecondDataUser = (state) => state.dataUsers.dataUsers;
export const {
  setDataUsers,
  setInvalidLoginValue,
  updateBalance,
  incrementBalance,
  handleTransfer,
  deleteInvalidLoginTimeValue,
} = userSlice.actions;
export default persistedDataUserReducer;
