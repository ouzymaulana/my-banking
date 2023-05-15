import {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLogin,
} from "@/Helper/CheckLogin/CheckLogin";
import MainLayout from "@/Layout";
import MutasiRekening from "@/Views/MutasiRekening";
import Head from "next/head";
import React from "react";

export default function mutasiRekening() {
  return (
    <>
      <Head>
        <title>Setor Tunai</title>
      </Head>
      <MainLayout>
        <MutasiRekening />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  let result = "";
  try {
    const cookiesData = context.req.cookies.cookiesData;

    if (cookiesData) {
      const parsedCookiesData = JSON.parse(cookiesData);
      const idEnterCard = parsedCookiesData.idEnterCard;
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
    props: {},
  };
}
