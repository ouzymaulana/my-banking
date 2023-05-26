import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDataUser } from "@/Context/DataUserContextProvider";
import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";

export default function TransaksiBerhasil({ showBalance }) {
  const route = useRouter();
  const { dataUser } = useDataUser();

  // const dataCookies = JSON.parse(Cookies.get("cookiesData"));
  // const cookiesData = {
  //   ...dataCookies,
  //   isLogin: false,
  // };

  // Cookies.set("cookiesData", JSON.stringify(cookiesData));
  const handleTransaksiLainnya = () => {
    route.push("/login");
  };

  const handleKeluar = () => {
    Cookies.remove("cookiesData");
    route.push("/insert-card");
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ paddingBottom: "60px" }}>
        <Typography variant="h4" gutterBottom>
          Transaksi Sukses
        </Typography>
        {showBalance && (
          <Typography variant="h6" gutterBottom>
            Saldo Anda : {formatCurrency(dataUser.saldo)}
          </Typography>
        )}
        <Typography variant="h6" gutterBottom>
          Apakah Anda ingin Tranksasi Lainnya?
        </Typography>
      </Box>
      <Box sx={{ color: "black" }} display="flex" justifyContent="space-around">
        <Button
          onClick={() => handleKeluar()}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#F28D8D",
            color: "black",
            padding: "10px",
            width: "15rem",
            ":hover": {
              backgroundColor: "#EE6363",
            },
          }}
        >
          Keluar
        </Button>
        <Button
          onClick={() => handleTransaksiLainnya()}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#B3C99C",
            color: "black",
            padding: "10px",
            width: "20rem",
            ":hover": {
              backgroundColor: "#839f66",
            },
          }}
        >
          Transaksi Lainnya
        </Button>
      </Box>
    </Box>
  );
}
