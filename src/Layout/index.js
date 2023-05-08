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
        {children}
      </Box>
    </>
  );
}
