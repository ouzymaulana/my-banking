import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ImageLayout({ children, src, width, hight }) {
  return (
    <Grid
      container
      columns={12}
      display={"flex"}
      flexDirection={"row"}
      flexWrap={{ xs: "wrap" }}
    >
      <Box
        sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
        component={Grid}
        container
        lg={6}
        justifyContent={"center"}
        alignItems={"center"}
        paddingTop={"50px"}
      >
        <Image src={src} width={width} height={hight} alt="atm-card" />
      </Box>
      {children}
    </Grid>
  );
}
