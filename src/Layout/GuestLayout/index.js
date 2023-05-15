import { Box } from "@mui/material";

export default function GuestLayout({ children, title }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        background: "rgb(201,219,178)",
        background:
          "linear-gradient(27deg, rgba(201,219,178,1) 0%, rgba(255,255,255,1) 60%)",
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
