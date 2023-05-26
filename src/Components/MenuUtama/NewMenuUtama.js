import { Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import style from "./../../styles/Home.module.css";
import Link from "next/link";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HistoryIcon from "@mui/icons-material/History";

const menuButtonSize = {
  fontSize: {
    lg: 32,
    md: 35,
    sm: 25,
    xs: 20,
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewMenuUtama({ status, title, iconName }) {
  const ComponentIcon = iconName;

  return (
    <>
      {status === "left" ? (
        <Grid
          item
          xs={6}
          lg={50}
          // rowSpacing={8}
          // columnSpacing={8}
          marginTop={5}
        >
          <Link className={style.buttonMenudua} href="/tarik-tunai">
            <Grid
              container
              alignItems="center"
              paddingY={6}
              sx={{ display: "flex" }}
            >
              <Grid item lg={1} display={"flex"} justifyContent="center">
                <ComponentIcon color="action" sx={menuButtonSize} />
              </Grid>
              <Grid item lg={10} display={"flex"} justifyContent="center">
                <Typography fontSize={25} sx={{ textDecoration: "none" }}>
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      ) : (
        <Grid item xs={6} lg={5} marginTop={5}>
          <Link className={style.buttonMenudua} href="/tarik-tunai">
            <Grid
              container
              alignItems="center"
              paddingY={6}
              sx={{ display: "flex" }}
            >
              <Grid
                item
                lg={11}
                display={"flex"}
                // sx={{ backgroundColor: "red" }}
                justifyContent="center"
              >
                <Typography fontSize={25} sx={{ textDecoration: "none" }}>
                  {title}
                </Typography>
              </Grid>
              <Grid
                // sx={{ backgroundColor: "blue" }}
                item
                lg={1}
                display={"flex"}
                justifyContent="center"
              >
                <ComponentIcon color="action" sx={menuButtonSize} />
              </Grid>
            </Grid>
          </Link>
        </Grid>
      )}
    </>
  );
}
