import { Button } from "@mui/material";
import React from "react";

export default function SimulationEnterMoney({ title, handle }) {
  return (
    <Button
      onClick={handle}
      variant="contained"
      size="large"
      sx={{
        margin: {
          lg: "10px 0",
          md: "8px 0",
          sm: "8px 0",
          xs: "8px 0",
        },
        fontSize: { lg: "20px", md: "16px", xs: "12px" },
        padding: { lg: "15px 0", md: "12px 0", sm: "8px" },
        width: "100%",
        backgroundColor: "#0600b3  ",
        ":hover": {
          bgcolor: "#07029d",
        },
      }}
    >
      {title}
    </Button>
  );
}
