import {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLogin,
  CheckInsertCardInLoginPage,
} from "@/Helper/CheckLogin/CheckLogin";
import MainLayout from "@/Layout";
import ProfileView from "@/Views/Profile";
import Head from "next/head";
import React from "react";

export default function Profile({ idInserCart }) {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <MainLayout>
        <ProfileView idInserCart={idInserCart} />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  // const isEnterCard = CheckInsertCardInLoginPage(
  //   context.req.cookies.idEnterCard
  // );

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
