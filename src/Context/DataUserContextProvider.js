import {
  selectDataUser,
  selectSecondDataUser,
} from "@/Redux/Slices/dataUsersSlice";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const DataUser = createContext();
export const useDataUser = () => useContext(DataUser);
const DataUserContextProvider = ({ children }) => {
  const dataUsers = useSelector(selectSecondDataUser);
  const cookiesData = Cookies.get("cookiesData");
  const idEnterCard = cookiesData ? JSON.parse(cookiesData).idEnterCard : null;

  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (idEnterCard) {
      const userLogin = dataUsers.find((user) => user.id == idEnterCard);
      if (userLogin) {
        setDataUser(userLogin);
      }
    }
  }, [dataUsers]);
  return (
    <DataUser.Provider value={{ dataUser, setDataUser }}>
      {children}
    </DataUser.Provider>
  );
};

export default DataUserContextProvider;
