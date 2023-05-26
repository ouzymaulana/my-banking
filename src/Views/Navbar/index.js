import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  padding: "20px",
  color: "black",
});

export default function Navbar() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Box
        position="fixed"
        right={0}
        left={0}
        top={0}
        sx={{
          backgroundColor: "#B3C99C",
          backgroundImage: `url("/img/navbar3.png")`,
          height: { lg: "5rem", xs: "3rem" },
          fontFamily: "Poppins, sans-serif",
          // fontSize: "1.8em",
          display: "flex",
          alignItems: "center",
          padding: "0 25px",
        }}
      >
        <Typography sx={{ fontSize: { xs: "20px", lg: "2em" } }} gutterBottom>
          MyBanking
        </Typography>
      </Box> */}

      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar
        position="fixed"
        sx={{
          height: { lg: "5rem", md: "4.5", sm: "4rem", xs: "3rem" },
          background: "transparent",
          // backgroundImage: `url("/img/navbar3.png")`,
        }}
      >
        <StyledToolbar>
          <Typography fontSize={{ lg: "30px", xs: "20 px" }} color={"white"}>
            MyBanking
          </Typography>
        </StyledToolbar>
      </AppBar>
      {/* </Box> */}
    </>
  );
}
