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
          fontSize: "18px",
          padding: "8px 60px",
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
          fontSize: "18px",
          padding: "8px 60px",
          backgroundColor: "#B3C99C",
          ":hover": {
            bgcolor: "#A2C37F",
          },
        }}
      >
        {title}
      </Button>
    </Box>
  );
}
