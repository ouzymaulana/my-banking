import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function ButtonTransaksi({ title }) {
  const route = useRouter();
  return (
    <Box
      paddingTop={5}
      display="flex"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <Button
        onClick={() => route.push("/")}
        variant="contained"
        size="large"
        sx={{
          borderRadius: "10px",
          fontSize: { lg: "18px", xs: "10px" },
          padding: { lg: "8px 60px", xs: "8px 20px" },
          backgroundColor: "#FF6464",
          ":hover": {
            bgcolor: "#EE6363",
          },
        }}
      >
        Batal
      </Button>

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          borderRadius: "10px",
          fontSize: { lg: "18px", xs: "10px" },
          padding: { lg: "8px 60px", xs: "8px 20px" },
          backgroundColor: "#0600b3  ",
          ":hover": {
            bgcolor: "#07029d",
          },
        }}
      >
        {title}
      </Button>
    </Box>
  );
}
