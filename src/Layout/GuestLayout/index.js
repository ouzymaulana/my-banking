import { Box } from "@mui/material";

export default function GuestLayout({ children, title }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        position="relative"
        height="100vh"
        width="50rem"
        sx={{
          padding: "50px",
          backgroundImage: `url("/img/ATM.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
