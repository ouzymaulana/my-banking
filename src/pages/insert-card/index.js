import AlertDataForm from "@/Components/Alert/AlertDataForm";
import InsertCardButton from "@/Components/InsertCardButton/InsertCardButton";
import InvalidCardButton from "@/Components/InsertCardButton/InvalidCardButton";
import CheckInsertCard from "@/Helper/CheckLogin/CheckLogin";
import theme from "@/Helper/theme";
import GuestLayout from "@/Layout/GuestLayout";
import ImageLayout from "@/Layout/ImageLayout";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export default function InsertCart({ dataUserLogin }) {
  const [validCard, setValidCard] = useState(true);
  return (
    <GuestLayout title="MyBanking">
      <ImageLayout src="/img/Credit-card.png" width={800} hight={700}>
        <Grid lg={5} sx={{ paddingTop: { lg: "25px" } }}>
          <Grid
            columns={12}
            item
            fontSize={35}
            display="flex"
            justifyContent="center"
            padding="20px"
          >
            <Typography variant="h3">MyBanking</Typography>
          </Grid>
          <Grid
            borderRadius={2}
            padding={5}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.767)",
            }}
          >
            <Box
              sx={{
                paddingBottom: {
                  lg: "130px",
                  md: "30px",
                  sm: "80px",
                  xs: "80px",
                },
              }}
            >
              <Typography fontWeight={500} variant="h4" gutterBottom>
                Selamat Datang
              </Typography>
              <Typography variant="h5" gutterBottom>
                Silahkan Masukkan Kartu ATM
              </Typography>
            </Box>
            {!validCard && (
              <AlertDataForm
                title="Kartu Anda Tidak Valid"
                severityStatus="error"
              />
            )}

            <Box>
              <InsertCardButton
                dataUserLogin={dataUserLogin}
                text="Masukkan Kartu A"
                action="handleInsertCardA"
              />
            </Box>
            <Box>
              <InsertCardButton
                dataUserLogin={dataUserLogin}
                text="Masukkan Kartu B"
                action="handleInsertCardB"
              />
            </Box>
            <InvalidCardButton
              text="Kartu Tidak Valid"
              setValidCard={setValidCard}
            />
          </Grid>
        </Grid>
      </ImageLayout>
    </GuestLayout>
  );
}

export async function getServerSideProps(context) {
  let result = "";
  try {
    const cookiesData = context.req.cookies.cookiesData;
    if (cookiesData) {
      result = CheckInsertCard(cookiesData);
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }

  // const isLogin = CheckInsertCard(context.req.cookies.idEnterCard);

  if (result) {
    return result;
  }

  let users = [];
  try {
    const res = await fetch(`http://localhost:3000/api/user`);
    users = await res.json();
  } catch (error) {
    console.log(error);
    console.error(error);
  }

  return {
    props: {
      dataUserLogin: users,
    },
  };
}
