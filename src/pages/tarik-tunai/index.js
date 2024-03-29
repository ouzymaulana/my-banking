import {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLogin,
} from "@/Helper/CheckLogin/CheckLogin";
import MainLayout from "@/Layout";
import TarikTunaiView from "@/Views/TarikTunai";
import Head from "next/head";

export default function TarikTunai({ idInserCart }) {
  return (
    <>
      <Head>
        <title>Tarik Tunai</title>
      </Head>
      <MainLayout>
        <TarikTunaiView idInserCart={idInserCart} />
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
