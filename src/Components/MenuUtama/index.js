import { Box } from "@mui/material";
import Image from "next/image";
import style from "./../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDataUser } from "@/Redux/Slices/dataUsersSlice";
import Cookies from "js-cookie";
import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";

export default function MenuUtama() {
  const { dataUsers } = useSelector(selectDataUser);
  const id = Cookies.get("idEnterCard");

  const userLogin = dataUsers.find((user) => user.id == id) || {};

  return (
    <Box
      height={230}
      borderRadius={3.5}
      overflow="hidden"
      position="relative"
      color="#989898"
    >
      <span className={style.accessAnywhere}>Access Anywhere</span>
      <span className={style.saldo}>
        Saldo Anda : {formatCurrency(userLogin.saldo) || 0}
      </span>
      <Image
        src="/img/bankingCard.jpg"
        width={400}
        height={400}
        alt="atm-card"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
