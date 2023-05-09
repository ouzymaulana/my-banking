import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "@/Layout";
import MenuView from "@/Views/Menu";
import { CheckInsertCardInLoginPage } from "@/Helper/CheckLogin/CheckLogin";

const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <MenuView />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const isEnterCard = CheckInsertCardInLoginPage(
    context.req.cookies.idEnterCard
  );

  if (isEnterCard) {
    return isEnterCard;
  }

  return {
    props: {},
  };
}
