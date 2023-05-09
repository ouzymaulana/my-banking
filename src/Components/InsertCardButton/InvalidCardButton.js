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
          margin: "10px 0",
          fontSize: "20px",
          padding: "15px 0",
          width: "100%",
          backgroundColor: "#B3C99C",
          ":hover": {
            bgcolor: "#A2C37F",
          },
        }}
      >
        {/* <FontAwesomeIcon icon={faPrint} />  */}
        {text}
      </Button>
    </Box>
  );
}
