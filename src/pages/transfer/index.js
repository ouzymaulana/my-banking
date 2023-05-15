import {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLogin,
} from "@/Helper/CheckLogin/CheckLogin";
import MainLayout from "@/Layout";
import TransferView from "@/Views/Transfer";
import { LabelImportant } from "@mui/icons-material";
import Head from "next/head";
import React from "react";

export default function Transfer(idInserCart) {
  return (
    <>
      <Head>
        <title>TransFer</title>
      </Head>
      <MainLayout>
        <TransferView />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  let result = "";
  let idEnterCard = "";
  try {
    const cookiesData = context.req.cookies.cookiesData;

    if (cookiesData) {
      const parsedCookiesData = JSON.parse(cookiesData);
      idEnterCard = parsedCookiesData.idEnterCard;
      const isLogin = parsedCookiesData.isLogin;

      result = CheckInsertCardAndLogin(idEnterCard, isLogin);
    } else {
      result = CheckCookieInsertCardInLoginPage(cookiesData);
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }

  if (result) {
    return result;
  }

  return {
    props: {
      idInserCart: idEnterCard,
    },
  };
}
