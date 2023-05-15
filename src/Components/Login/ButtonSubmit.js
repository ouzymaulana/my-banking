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
        fontSize: "20px",
        padding: "10px 0",
        backgroundColor: "#B3C99C",
        ":hover": {
          bgcolor: "#A2C37F",
        },
      }}
    >
      {title}
    </Button>
  );
}
