import { Box } from "@mui/material";
import style from "./../../styles/Home.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from "next/link";

const menuBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 30px 30px 30px",
};
export default function Menu() {
  return (
    <>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/">
          <CurrencyExchangeOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>tarik tunai</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/">
          <MonetizationOnOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>setor tunai</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/">
          <VolunteerActivismOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>transfer</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/">
          <CreditCardIcon color="action" fontSize="large" />
        </Link>
        <span>profile</span>
      </Box>
      <Box sx={menuBoxStyle}>
        <Link className={style.buttonMenu} href="/">
          <LogoutOutlinedIcon color="action" fontSize="large" />
        </Link>
        <span>LogOut</span>
      </Box>
    </>
  );
}
