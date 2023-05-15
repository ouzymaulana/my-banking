import MainLayout from "@/Layout";
import Head from "next/head";
import React from "react";
import OtherOptionView from "@/Views/TarikTunai/OtherOptionView";
import {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLogin,
} from "@/Helper/CheckLogin/CheckLogin";

export default function otherOptions({ idInserCart }) {
  return (
    <>
      <Head>
        <title>Tarik Tunai</title>
      </Head>
      <MainLayout>
        <OtherOptionView idInserCart={idInserCart} />
      </MainLayout>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const isEnterCard = CheckInsertCardInLoginPage(
//     context.req.cookies.idEnterCard
//   );

//   if (isEnterCard) {
//     return isEnterCard;
//   }

//   return {
//     props: {
//       idInserCart: context.req.cookies.idEnterCard,
//     },
//   };
// }

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
