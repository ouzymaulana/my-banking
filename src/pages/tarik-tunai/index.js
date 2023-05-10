import { CheckInsertCardInLoginPage } from "@/Helper/CheckLogin/CheckLogin";
import MainLayout from "@/Layout";
import TarikTunaiView from "@/Views/TarikTunai";
import Head from "next/head";
import React from "react";

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
  const isEnterCard = CheckInsertCardInLoginPage(
    context.req.cookies.idEnterCard
  );

  if (isEnterCard) {
    return isEnterCard;
  }

  return {
    props: {
      idInserCart: context.req.cookies.idEnterCard,
    },
  };
}
