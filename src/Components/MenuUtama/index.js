import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import style from "./../../styles/Home.module.css";
import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";
import { useDataUser } from "@/Context/DataUserContextProvider";
import { useSelector } from "react-redux";
import { selectSecondDataUser } from "@/Redux/Slices/dataUsersSlice";
import { Cookie } from "next/font/google";
import Cookies from "js-cookie";

export default function MenuUtama() {
  const { dataUser } = useDataUser();
  const dataUsers = useSelector(selectSecondDataUser);

  const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;
  const userLogin = dataUsers.find((user) => user.id == id) || {};
  return (
    <Grid
      lg={5}
      item
      color={"white"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ padding: "0 !important" }}
      width={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          padding: { lg: 5, xs: 2 },
          gap: { lg: 5, xs: 1 },
          marginLeft: { lg: 25 },
          marginTop: { xs: 2 },
          borderRadius: "15px",
        }}
      >
        <Box>
          <Typography color={"#ce93d8"} fontSize={{ lg: 20, xs: 14 }}>
            Selamat Datang
          </Typography>
          <Typography fontSize={{ lg: 30, xs: 16 }}>
            {userLogin.nama}
          </Typography>
        </Box>
        <Box>
          <Typography color={"#ce93d8"} fontSize={{ lg: 20, xs: 14 }}>
            Nomor Rekening
          </Typography>
          <Typography fontSize={{ lg: 30, xs: 16 }}>
            {userLogin.nomor}
          </Typography>
        </Box>
        <Box>
          <Typography color={"#ce93d8"} fontSize={{ lg: 20, xs: 14 }}>
            Saldo Anda
          </Typography>
          <Typography fontSize={{ lg: 30, xs: 16 }}>
            {formatCurrency(userLogin ? userLogin.saldo : 0)}
          </Typography>
        </Box>
      </Box>
    </Grid>
    // <Grid container spacing={2}>
    //   <Grid item xs={12} md={12}>
    //     <Box
    //       height={230}
    //       sx={{
    //         height: { xs: "100px", sm: "140px", md: "180px", lg: "230px" },
    //       }}
    //       borderRadius={3.5}
    //       overflow="hidden"
    //       position="relative"
    //       color="#989898"
    //     >
    //       <Typography
    //         variant="subtitle1"
    //         sx={{ fontSize: { xs: "20px", md: "24px", lg: "32px" } }}
    //         className={style.accessAnywhere}
    //       >
    //         Access Anywhere
    //       </Typography>
    //       <Typography
    //         sx={{ fontSize: { xs: "12px", md: "16px", lg: "20px" } }}
    //         className={style.saldo}
    //       >
    //         Saldo Anda : {formatCurrency(dataUser ? dataUser.saldo : 0)}
    //       </Typography>
    //       <Image
    //         src="/img/Rectangle3.png"
    //         width={400}
    //         height={400}
    //         alt="atm-card"
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           // objectFit: "cover",
    //         }}
    //       />
    //     </Box>
    //   </Grid>
    // </Grid>
  );
}
