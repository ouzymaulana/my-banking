import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";
import { Box, Button } from "@mui/material";

export default function SelectButton({ setJumlahPenarikan, jumlah }) {
  const handleOnclickButton = (value) => {
    setJumlahPenarikan(value);
  };

  return (
    <Button
      sx={{
        width: "10rem",
        border: "2px solid #A2C37F",
        color: "#A2A97F",
        ":hover": {
          border: "2px solid #839f66",
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
