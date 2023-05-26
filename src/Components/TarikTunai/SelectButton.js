import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";
import { Box, Button } from "@mui/material";
import styles from "./../../styles/Home.module.css";

export default function SelectButton({
  setJumlahPenarikan,
  jumlahPenarikan,
  jumlah,
}) {
  const handleOnclickButton = (value) => {
    setJumlahPenarikan(value);
  };

  return (
    <Button
      className={jumlah === jumlahPenarikan ? "select-active" : ""}
      sx={{
        backgroundColor: jumlah === jumlahPenarikan ? "#EEEEEE" : "white",
        width: { lg: "10rem", xs: "6.5rem" },
        fontSize: { lg: "18px", xs: "10px" },
        border: { lg: "2.5px solid #A2C37F", xs: "2px solid #A2C37F" },
        color: "#A2A97F",
        ":hover": {
          border: "2.5px solid #839f66",
          color: "#A2A97F",
        },
      }}
      variant="outlined"
      size="large"
      onClick={() => handleOnclickButton(jumlah)}
    >
      {formatCurrency(jumlah)}
    </Button>
  );
}
