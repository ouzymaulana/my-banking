import { Box } from "@mui/material";
import Image from "next/image";
import style from "./../../styles/Home.module.css";

export default function MenuUtama() {
  return (
    <Box
      height={230}
      borderRadius={3.5}
      overflow="hidden"
      position="relative"
      color="#989898"
    >
      <span className={style.accessAnywhere}>Access Anywhere</span>
      <span className={style.saldo}>Saldo Anda : 200.000</span>
      <Image
        src="/img/bankingCard.jpg"
        width={100}
        height={100}
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
