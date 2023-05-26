import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import style from "./../../styles/Home.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HistoryIcon from "@mui/icons-material/History";
import Link from "next/link";
import Cookies from "js-cookie";
import NewMenuUtama from "./NewMenuUtama";
import { useRouter } from "next/router";
import { deepPurple, pink, purple } from "@mui/material/colors";
import MenuUtama from ".";

const menuBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 30px 30px 30px",
  width: "5rem",
  fontSize: { lg: 18, md: 14, sm: 12, xs: 10 },
};

const menuButtonSize = {
  fontSize: {
    lg: 50,
    md: 35,
    sm: 25,
    xs: 20,
  },
  color: "#d500f9",
  // color: deepPurple[500],
  // color: pink[500],
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Menu() {
  const route = useRouter();
  const handleLogout = () => {
    Cookies.remove("cookiesData");
    route.push("/insert-card");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={12} display={"flex"}>
          <MenuUtama />
          <Grid
            container
            // columnSpacing={8}
            // rowSpacing={4}
            marginY={3}
            lg={7}
            sx={{ padding: { lg: 10, xs: 0 } }}
          >
            <Grid paddingBottom={1} paddingLeft={{ lg: 5, xs: 3 }}>
              <Typography fontSize={{ lg: 30, xs: 16 }} color={"white"}>
                Pilih Layanan
              </Typography>
            </Grid>
            <Grid
              container
              spacing={3}
              gap={1}
              marginLeft={0}
              display={"flex"}
              justifyContent={"center"}
              marginY={0.5}
              height={{ lg: 350, xs: 100 }}
            >
              <Grid
                item
                xs={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "15px 0 0 0",
                  padding: "0 !important",
                }}
                onClick={() => route.push("/tarik-tunai")}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <CurrencyExchangeOutlinedIcon
                    color="action"
                    sx={menuButtonSize}
                  />
                  <Typography
                    fontSize={{ lg: 20, xs: 12 }}
                    fontWeight={600}
                    className="grid-elements"
                    color={purple[700]}
                  >
                    Tarik Tunai
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  paddingLeft: 0,
                  padding: "0 !important",
                }}
                onClick={() => route.push("/setor-tunai")}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <MonetizationOnOutlinedIcon
                    color="action"
                    sx={menuButtonSize}
                  />
                  <Typography
                    fontSize={{ lg: 20, xs: 12 }}
                    fontWeight={600}
                    className="grid-elements"
                    color={purple[700]}
                  >
                    Setor Tunai
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "0 15px 0 0",
                  padding: "0 !important",
                }}
                onClick={() => route.push("/transfer")}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <VolunteerActivismOutlinedIcon
                    color="action"
                    sx={menuButtonSize}
                  />
                  <Typography
                    fontSize={{ lg: 20, xs: 12 }}
                    fontWeight={600}
                    className="grid-elements"
                    color={purple[700]}
                  >
                    Transfer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              gap={1}
              marginLeft={0}
              display={"flex"}
              justifyContent={"center"}
              marginY={0.5}
              height={100}
            >
              <Grid
                item
                xs={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "0 0 0 15px",
                  padding: "30px !important",
                }}
                onClick={() => route.push("/mutasi-rekening")}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <HistoryIcon color="action" sx={menuButtonSize} />
                  <Typography
                    fontSize={{ lg: 20, xs: 12 }}
                    fontWeight={600}
                    className="grid-elements"
                    color={purple[700]}
                    align="center"
                  >
                    Mutasi Rekening
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  padding: "30px !important",
                }}
                onClick={() => route.push("/profile")}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <CreditCardIcon color="action" sx={menuButtonSize} />
                  <Typography
                    fontSize={{ lg: 20, xs: 12 }}
                    fontWeight={600}
                    className="grid-elements"
                    color={purple[700]}
                  >
                    Profile
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "0 0 15px 0",
                  padding: "30px !important",
                }}
                onClick={handleLogout}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <LogoutOutlinedIcon color="action" sx={menuButtonSize} />
                  <Typography
                    fontSize={{ lg: 20, xs: 12 }}
                    fontWeight={600}
                    className="grid-elements"
                    color={purple[700]}
                  >
                    LogOut
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <Grid
        container
        columns={16}
        justifyContent="start"
        sx={{ marginTop: { lg: 3, md: 1.5, sm: 1.5, xs: 1.5 } }}
      >
        <Box
          sx={menuBoxStyle}
          component={Grid}
          item
          lg={1.9}
          md={1.9}
          sm={1.6}
          xs={2.4}
        >
          <Link className={style.buttonMenu} href="/tarik-tunai">
            <CurrencyExchangeOutlinedIcon
              color="action"
              // fontSize="large"
              sx={menuButtonSize}
            />
          </Link>
          <Typography
            sx={{ fontSize: { xs: "10px", lg: "15px" } }}
            variant="subtitle2"
            gutterBottom
          >
            tarik tunai
          </Typography>
        </Box>
        <Box
          sx={menuBoxStyle}
          component={Grid}
          item
          lg={1.9}
          md={1.9}
          sm={1.6}
          xs={2.4}
        >
          <Link className={style.buttonMenu} href="/setor-tunai">
            <MonetizationOnOutlinedIcon color="action" sx={menuButtonSize} />
          </Link>

          <Typography
            sx={{ fontSize: { xs: "10px", lg: "15px" } }}
            variant="subtitle2"
            gutterBottom
          >
            setor tunai
          </Typography>
        </Box>
        <Box
          sx={menuBoxStyle}
          component={Grid}
          item
          lg={1.9}
          md={1.9}
          sm={1.6}
          xs={2.4}
        >
          <Link className={style.buttonMenu} href="/transfer">
            <VolunteerActivismOutlinedIcon color="action" sx={menuButtonSize} />
          </Link>

          <Typography
            sx={{ fontSize: { xs: "10px", lg: "15px" } }}
            variant="subtitle2"
            gutterBottom
          >
            transfer
          </Typography>
        </Box>
        <Box
          sx={menuBoxStyle}
          component={Grid}
          item
          lg={1.9}
          md={1.9}
          sm={1.6}
          xs={2.4}
        >
          <Link className={style.buttonMenu} href="/profile">
            <CreditCardIcon color="action" sx={menuButtonSize} />
          </Link>

          <Typography
            sx={{ fontSize: { xs: "10px", lg: "15px" } }}
            variant="subtitle2"
            gutterBottom
          >
            profile
          </Typography>
        </Box>
        <Box
          sx={menuBoxStyle}
          component={Grid}
          item
          lg={1.9}
          md={1.9}
          sm={1.6}
          xs={2.4}
        >
          <Link
            className={style.buttonMenu}
            href="/insert-card"
            onClick={handleLogout}
          >
            <LogoutOutlinedIcon color="action" sx={menuButtonSize} />
          </Link>

          <Typography
            sx={{ fontSize: { xs: "10px", lg: "15px" } }}
            variant="subtitle2"
            gutterBottom
          >
            LogOut
          </Typography>
        </Box>
        <Box
          textAlign="center"
          sx={menuBoxStyle}
          component={Grid}
          item
          lg={1.9}
          md={1.9}
          sm={1.6}
          xs={2.4}
        >
          <Link className={style.buttonMenu} href="/mutasi-rekening">
            <HistoryIcon color="action" sx={menuButtonSize} />
          </Link>

          <Typography
            sx={{ fontSize: { xs: "10px", lg: "15px" } }}
            variant="subtitle2"
            gutterBottom
          >
            mutasi rekening
          </Typography>
        </Box>
      </Grid> */}
    </>
  );
}
