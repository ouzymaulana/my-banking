import theme from "@/Helper/theme";
import Navbar from "@/Views/Navbar";
import { Box } from "@mui/material";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFFF",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "50rem",
            padding: "110px 30px 30px 30px",
            backgroundColor: theme.palette.secondary.main,
          }}
          color="#424242"
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
