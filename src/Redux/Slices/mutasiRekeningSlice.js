import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const nutasiRekeningPersistConfig = {
  key: "mutasiRekening",
  storage: storage,
  whitelist: ["dataMutasiRekening"],
};

const mutasiRekeningSlice = createSlice({
  name: "mutasiRekening",
  initialState: {
    dataMutasiRekening: [],
  },
  reducers: {
    createMutasiRekening: (state, action) => {
      if (state.dataMutasiRekening === "") {
        state.dataMutasiRekening = action.payload;
      } else {
        state.dataMutasiRekening = [
          ...state.dataMutasiRekening,
          ...action.payload,
        ];
      }
    },
  },
});

const persistedMutasiRekeningReducer = persistReducer(
  nutasiRekeningPersistConfig,
  mutasiRekeningSlice.reducer
);

// export const selectMutasiRekening = (state) =>
//   state.mutasiRekening.dataMutasiRekening;
export const selectMutasiRekening = (state) =>
  state.mutasiRekening.dataMutasiRekening;
// export const selectDataMutasiRekening = (state) => state.dataMutasiRekening;
export const { createMutasiRekening } = mutasiRekeningSlice.actions;
export default persistedMutasiRekeningReducer;
