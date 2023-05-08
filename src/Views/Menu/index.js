import { Box } from "@mui/material";
import theme from "@/Helper/theme";
import MenuUtama from "@/Components/MenuUtama";
import Menu from "@/Components/MenuUtama/Menu";

export default function MenuView() {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "50rem",
        padding: "110px 30px 30px 30px",
        backgroundColor: theme.palette.secondary.main,
      }}
      color="#424242"
    >
      <MenuUtama />
      <Box
        marginTop={2.7}
        padding="20px 20px"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        <Menu />
      </Box>
    </Box>
  );
}
