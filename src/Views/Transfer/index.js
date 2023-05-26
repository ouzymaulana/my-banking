import ButtonTransaksi from "@/Components/Login/ButtonTransaksi";
import { useDataUser } from "@/Context/DataUserContextProvider";
import CardLayout from "@/Layout/Card";
import {
  handleTransfer,
  selectSecondDataUser,
} from "@/Redux/Slices/dataUsersSlice";
import { Box } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import TransaksiBerhasil from "../TransaksiBerhasil";
import { createMutasiRekening } from "@/Redux/Slices/mutasiRekeningSlice";
import CofirmTampilkanSaldo from "../Modal/CofirmTampilkanSaldo";
import ImageLayout from "@/Layout/ImageLayout";

export default function TransferView() {
  const dataUsers = useSelector(selectSecondDataUser);
  const { dataUser } = useDataUser();
  const dispatch = useDispatch();
  const [isTransferSuccess, setIsTransFerSuccess] = useState(false);

  const handleSubmit = (value, setFieldError) => {
    const tujuanTransfer = dataUsers.find(
      (user) => user.nomor === value.rekeningTujuan && user.id !== dataUser.id
    );
    if (dataUser.saldo >= value.jumlahTransfer) {
      if (tujuanTransfer) {
        dispatch(handleTransfer(value));

        // const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;
        // const userLogin = dataUsers.find((user) => user.id === id);
        const date = new Date();

        const mutationData = [
          {
            userId: dataUser.id,
            transactionName: "Transfer / DB",
            transferToOrFrom: "Transfer Ke " + tujuanTransfer.nama,
            transactionAmount: value.jumlahTransfer,
            endingBalance: dataUser.saldo - value.jumlahTransfer,
            transactionDate: date.toISOString(),
          },
          {
            userId: tujuanTransfer.id,
            transactionName: "Transfer / CR",
            transferToOrFrom: "Transfer Dari " + dataUser.nama,
            transactionAmount: value.jumlahTransfer,
            endingBalance:
              parseInt(tujuanTransfer.saldo) + parseInt(value.jumlahTransfer),
            transactionDate: date.toISOString(),
          },
        ];

        dispatch(createMutasiRekening(mutationData));
        setIsTransFerSuccess(true);
      } else {
        setFieldError("rekeningTujuan", "Rekening Tujuan Tidak Ditemukan");
      }
    } else {
      setFieldError("jumlahTransfer", "saldo anda tidak cukup");
    }
  };
  const validationSchema = Yup.object({
    rekeningTujuan: Yup.number()
      .typeError("Nomor rekening harus berupa angka")
      .required("Nomor rekening harus diisi"),
    jumlahTransfer: Yup.number()
      .typeError("Jumlah transfer harus berupa angka")
      .required("Jumlah transfer harus diisi"),
  });
  return (
    <ImageLayout src="/img/Approved(1).png" width={800} hight={700}>
      <CardLayout title="Transfer">
        {isTransferSuccess ? (
          <CofirmTampilkanSaldo />
        ) : (
          <Formik
            initialValues={{ rekeningTujuan: "", jumlahTransfer: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setFieldError }) =>
              handleSubmit(values, setFieldError)
            }
          >
            <Form style={{ width: "100%" }}>
              <Box paddingBottom={1}>
                <label htmlFor="jumlahTransfer" style={{ fontSize: "20px" }}>
                  Jumlah Transfer
                </label>
                <Field
                  style={{
                    width: "100%",
                    margin: "8px 0",
                    padding: "10px",
                    fontSize: "20px",
                    borderRadius: "10px",
                    border: "3px solid #BCBCBC",
                  }}
                  autoComplete="off"
                  name="jumlahTransfer"
                  id="jumlahTransfer"
                />
                <span style={{ color: "red" }}>
                  <ErrorMessage name="jumlahTransfer" />
                </span>
              </Box>

              <Box>
                <label htmlFor="rekeningTujuan" style={{ fontSize: "20px" }}>
                  Nomor Rekening Tujuan
                </label>
                <Field
                  style={{
                    width: "100%",
                    margin: "8px 0",
                    padding: "10px",
                    fontSize: "20px",
                    borderRadius: "10px",
                    border: "3px solid #BCBCBC",
                  }}
                  autoComplete="off"
                  name="rekeningTujuan"
                  id="rekeningTujuan"
                />
                <span style={{ color: "red" }}>
                  <ErrorMessage name="rekeningTujuan" />
                </span>
              </Box>
              <ButtonTransaksi title="Selanjutnya" />
            </Form>
          </Formik>
        )}
      </CardLayout>
    </ImageLayout>
  );
}
