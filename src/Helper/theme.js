import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

const base = createTheme({
  palette: {
    secondary: {
      main: "#C9DBB2",
    },
    mode: "light",
  },
});

const theme = responsiveFontSizes(base);

export default theme;
