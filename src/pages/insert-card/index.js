import AlertDataForm from "@/Components/Alert/AlertDataForm";
import InsertCardButton from "@/Components/InsertCardButton/InsertCardButton";
import InvalidCardButton from "@/Components/InsertCardButton/InvalidCardButton";
import CheckInsertCard from "@/Helper/CheckLogin/CheckLogin";
import theme from "@/Helper/theme";
import GuestLayout from "@/Layout/GuestLayout";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function InsertCart() {
  const [validCard, setValidCard] = useState(true);

  return (
    <GuestLayout title="MyBanking">
      <Box paddingTop={20}>
        <Box
          fontSize={35}
          display="flex"
          justifyContent="center"
          padding="20px"
        >
          <span>MyBanking</span>
        </Box>
        <Box
          borderRadius={2}
          padding={5}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.767)",
          }}
        >
          <Box paddingBottom={15} fontWeight={600}>
            <Typography variant="h4" gutterBottom>
              Selamata Datang
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
              text="Masukkan Kartu A"
              action="handleInsertCardA"
            />
          </Box>
          <Box>
            <InsertCardButton
              text="Masukkan Kartu B"
              action="handleInsertCardB"
            />
          </Box>
          <InvalidCardButton
            text="Kartu Tidak Valid"
            setValidCard={setValidCard}
          />
        </Box>
      </Box>
    </GuestLayout>
  );
}

export async function getServerSideProps(context) {
  const isLogin = CheckInsertCard(context.req.cookies.idEnterCard);

  if (isLogin) {
    return isLogin;
  }

  return {
    props: {},
  };
}
