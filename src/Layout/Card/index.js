import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function CardLayout({ children, title }) {
  return (
    <>
      {/* <Box
        display="flex"
        paddingLeft={3}
        paddingBottom={2}
        justifyContent="start"
      >
        <Typography fontSize={{ lg: 25, md: 20, sm: 15 }}>{title}</Typography>
      </Box> */}
      <Box
        component={Grid}
        lg={5}
        borderRadius={2}
        padding={5}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          height: "max-content",
        }}
        maxWidth={"50rem"}
        marginTop={8}
      >
        {children}
      </Box>
    </>
  );
}
