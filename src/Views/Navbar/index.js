import { Box, Button } from "@mui/material";
import Head from "next/head";
import React from "react";

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
      <Box
        position="fixed"
        right={0}
        left={0}
        top={0}
        sx={{
          backgroundColor: "#B3C99C",
          backgroundImage: `url("/img/navbar3.png")`,
          height: "5rem",
          fontFamily: "Poppins, sans-serif",
          fontSize: "1.8em",
          display: "flex",
          alignItems: "center",
          padding: "0 25px",
        }}
      >
        <span>MyBanking</span>
      </Box>
    </>
  );
}
