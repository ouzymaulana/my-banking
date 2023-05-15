import { Box } from "@mui/material";
import React from "react";

export default function CardLayout({ children, title }) {
  return (
    <>
      <Box
        fontSize={25}
        display="flex"
        paddingLeft={3}
        paddingBottom={2}
        justifyContent="start"
      >
        <span>{title}</span>
      </Box>
      <Box borderRadius={2} padding={5} sx={{ backgroundColor: "white" }}>
        {children}
      </Box>
    </>
  );
}
