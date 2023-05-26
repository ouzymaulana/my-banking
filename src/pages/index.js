import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "@/Layout";
import MenuView from "@/Views/Menu";
import {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLogin,
} from "@/Helper/CheckLogin/CheckLogin";
import MenuLayout from "@/Layout/Menu";
const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MenuLayout>
        <MenuView />
      </MenuLayout>
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
