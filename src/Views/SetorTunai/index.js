import CardLayout from "@/Layout/Card";
import * as Yup from "yup";
import TransaksiBerhasil from "../TransaksiBerhasil";
import { Box, Button, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementBalance,
  selectDataUser,
  selectSecondDataUser,
} from "@/Redux/Slices/dataUsersSlice";
import AlertDataForm from "@/Components/Alert/AlertDataForm";
import { useRouter } from "next/router";
import SelectButton from "@/Components/TarikTunai/SelectButton";
import ButtonTransaksi from "@/Components/Login/ButtonTransaksi";
import { createMutasiRekening } from "@/Redux/Slices/mutasiRekeningSlice";
import { useDataUser } from "@/Context/DataUserContextProvider";
import Cookies from "js-cookie";

export default function SetorTunaiView() {
  const [selectButtonValue, setSelectButtonValue] = useState("");
  const [isValidWithDrawal, setIsValidWithDrawal] = useState(false);
  const [isUnSelectButton, setIsUnSelectButton] = useState(false);

  const dispatch = useDispatch();
  const dataUsers = useSelector(selectSecondDataUser);

  const handleSubmit = (values, setFieldError) => {
    if (selectButtonValue !== "") {
      // console.log(values.jumlahSetoran % selectButtonValue);
      if (values.jumlahSetoran % selectButtonValue === 0) {
        // console.log(values.jumlahSetoran < selectButtonValue);
        dispatch(incrementBalance(values.jumlahSetoran));

        const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;
        const userLogin = dataUsers.find((user) => user.id === id);
        const date = new Date();

        const mutationData = [
          {
            userId: userLogin.id,
            transactionName: "Setor Tunai",
            transactionAmount: values.jumlahSetoran,
            endingBalance: userLogin.saldo,
            transactionDate: new Intl.DateTimeFormat(["ban", "id"]).format(
              date
            ),
          },
        ];

        dispatch(createMutasiRekening(mutationData));
        setIsValidWithDrawal(true);
        setIsUnSelectButton(false);
      } else {
        setFieldError(
          "jumlahSetoran",
          "nilai yang anda masukkan tidak sesusai dengan pecahan"
        );
      }
    } else {
      setIsUnSelectButton(true);
    }
  };

  const validationSchema = Yup.object({
    jumlahSetoran: Yup.number()
      .typeError("Jumlah setoran harus berupa angka")
      .required("Jumlah setoran harus diisi"),
  });

  return (
    <CardLayout title="Setor Tunai">
      {isValidWithDrawal ? (
        <TransaksiBerhasil />
      ) : (
        <Box display="flex" justifyContent="start" gap={5} flexWrap="wrap">
          <Box sx={{ width: "100%" }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Pilih nilai pecahan
              </Typography>
            </Box>
            {isUnSelectButton && (
              <AlertDataForm
                title="jumlah pecahan harus dipilih"
                severityStatus="error"
              />
            )}
            <Box display="flex" gap={2}>
              <SelectButton
                setJumlahPenarikan={setSelectButtonValue}
                jumlahPenarikan={selectButtonValue}
                jumlah={50000}
              />
              <SelectButton
                setJumlahPenarikan={setSelectButtonValue}
                jumlahPenarikan={selectButtonValue}
                jumlah={100000}
              />
            </Box>
          </Box>

          <Formik
            initialValues={{ jumlahSetoran: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setFieldError }) =>
              handleSubmit(values, setFieldError)
            }
          >
            <Form style={{ width: "100%" }}>
              <label htmlFor="jumlahSetoran" style={{ fontSize: "20px" }}>
                masukkan nilai setoran
              </label>
              <Field
                style={{
                  width: "100%",
                  margin: "8px 0",
                  padding: "10px",
                  fontSize: "20px",
                  borderRadius: "8px",
                  border: "2.5px solid #A2C37F",
                }}
                autoComplete="off"
                id="jumlahSetoran"
                name="jumlahSetoran"
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="jumlahSetoran" />
              </span>

              <ButtonTransaksi title="Setor Tunai" />
            </Form>
          </Formik>
        </Box>
      )}
    </CardLayout>
  );
}
