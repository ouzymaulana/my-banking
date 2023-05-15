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
        width: "10rem",
        border: "2.5px solid #A2C37F",
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
