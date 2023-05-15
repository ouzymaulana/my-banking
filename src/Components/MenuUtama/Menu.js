import { Box } from "@mui/material";
import style from "./../../styles/Home.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HistoryIcon from "@mui/icons-material/History";
import Link from "next/link";
import Cookies from "js-cookie";

const menuBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 30px 30px 30px",
  width: "5rem",
};

const handleLogout = () => {
  Cookies.remove("cookiesData");
};

export default function Menu() {
  return (
    <>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/tarik-tunai">
          <CurrencyExchangeOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>tarik tunai</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/setor-tunai">
          <MonetizationOnOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>setor tunai</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/transfer">
          <VolunteerActivismOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>transfer</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/profile">
          <CreditCardIcon color="action" fontSize="large" />
        </Link>
        <span>profile</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link
          className={style.buttonMenu}
          href="/insert-card"
          onClick={handleLogout}
        >
          <LogoutOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>LogOut</span>
      </Box>
      <Box textAlign="center" sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/mutasi-rekening">
          <HistoryIcon color="action" fontSize="large" />
        </Link>
        <span>mutasi rekening</span>
      </Box>
    </>
  );
}
