import DataUserContextProvider from "@/Context/DataUserContextProvider";
import theme from "@/Helper/theme";
import Navbar from "@/Views/Navbar";
import { Box } from "@mui/material";
import React from "react";

export default function MenuLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "rgb(201, 219, 178)",
          background:
            "linear-gradient(27deg, rgba(201,219,178,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            padding: { lg: "110px 30px 30px 30px", xs: "60px 30px 30px 30px" },
            // backgroundColor: theme.palette.secondary.main,
            backgroundImage: `url("/img/background1.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          color="black"
        >
          <DataUserContextProvider>{children}</DataUserContextProvider>
        </Box>
      </Box>
    </>
  );
}
