import { Alert, Stack } from "@mui/material";
import React from "react";

export default function AlertDataForm({ title, severityStatus }) {
  return (
    <Stack sx={{ width: "100%" }} paddingBottom={0.5}>
      <Alert variant="filled" severity={severityStatus}>
        {title}
      </Alert>
    </Stack>
  );
}
