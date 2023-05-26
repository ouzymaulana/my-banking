import { Box, Button } from "@mui/material";

export default function invalidCardButton({ text, setValidCard }) {
  const invalidCard = () => {
    setValidCard(false);
  };

  return (
    <Box>
      <Button
        onClick={invalidCard}
        variant="contained"
        size="large"
        sx={{
          margin: { lg: "10px 0", md: "8px 0", sm: "8px 0", xs: "8px 0" },
          fontSize: { lg: "20px", md: "16px", xs: "12px" },
          padding: { lg: "15px 0", md: "12px 0", sm: "8px" },
          width: "100%",
          backgroundColor: "#B3C99C",
          ":hover": {
            bgcolor: "#A2C37F",
          },
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
