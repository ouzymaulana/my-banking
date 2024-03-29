import { Button } from "@mui/material";
import React from "react";

export default function ButtonSubmit({ title, handle }) {
  return (
    <Button
      onClick={handle}
      type="submit"
      variant="contained"
      size="large"
      sx={{
        width: "100%",
        fontSize: { lg: "20px", sm: "10px" },
        padding: { lg: "10px 0", sm: "8px 0", xs: "3px 0" },
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
