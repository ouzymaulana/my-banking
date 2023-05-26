import CardLayout from "@/Layout/Card";
import * as Yup from "yup";
import { Box, Button, InputLabel, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementBalance,
  selectDataUser,
  selectSecondDataUser,
} from "@/Redux/Slices/dataUsersSlice";
import AlertDataForm from "@/Components/Alert/AlertDataForm";
import SelectButton from "@/Components/TarikTunai/SelectButton";
import ButtonTransaksi from "@/Components/Login/ButtonTransaksi";
import { createMutasiRekening } from "@/Redux/Slices/mutasiRekeningSlice";
import Cookies from "js-cookie";
import CofirmTampilkanSaldo from "../Modal/CofirmTampilkanSaldo";
import ButtonSubmit from "@/Components/Login/ButtonSubmit";
import ImageLayout from "@/Layout/ImageLayout";
import SimulationEnterMoney from "@/Components/SetorTunai";
import { useRouter } from "next/router";

export default function SetorTunaiView() {
  const route = useRouter();
  const [selectButtonValue, setSelectButtonValue] = useState("");
  const [invalidMoney, setInvalidMoney] = useState("");
  const [isValidWithDrawal, setIsValidWithDrawal] = useState(false);
  const [isUnSelectButton, setIsUnSelectButton] = useState(false);
  const [isDifferentValues, setIsDifferentValues] = useState(false);

  const dispatch = useDispatch();
  const dataUsers = useSelector(selectSecondDataUser);

  const handleEnterMoney = (value) => {
    if (selectButtonValue !== "") {
      if (value % selectButtonValue === 0) {
        console.log(value);

        let resultInvalidMoney = "";
        if (invalidMoney !== "") {
          resultInvalidMoney = selectButtonValue * invalidMoney;
        }

        const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;
        const userLogin = dataUsers.find((user) => user.id === id);
        const date = new Date();

        const saldo = parseInt(userLogin.saldo);
        const jumlahSetoran =
          resultInvalidMoney !== ""
            ? parseInt(value) - resultInvalidMoney
            : parseInt(value);

        dispatch(incrementBalance(jumlahSetoran));
        const mutationData = [
          {
            userId: userLogin.id,
            transactionName: "Setor Tunai",
            transferToOrFrom: "-",
            transactionAmount: jumlahSetoran,
            endingBalance: saldo + jumlahSetoran,
            transactionDate: date.toISOString(),
          },
        ];

        dispatch(createMutasiRekening(mutationData));
        setIsValidWithDrawal(true);
        setIsUnSelectButton(false);
      } else {
        setIsDifferentValues(true);
        setIsUnSelectButton(false);
      }
    } else {
      setIsUnSelectButton(true);
      setIsDifferentValues(false);
    }
  };

  const handleSubmit = (values, setFieldError) => {
    if (selectButtonValue !== "") {
      // console.log(values.jumlahSetoran % selectButtonValue);
      if (values.jumlahSetoran % selectButtonValue === 0) {
        // console.log(values.jumlahSetoran < selectButtonValue);

        const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;
        const userLogin = dataUsers.find((user) => user.id === id);
        const date = new Date();

        let invalidMoney = "";
        if (values.invalidMoney !== "") {
          invalidMoney = selectButtonValue * values.invalidMoney;
        }

        const saldo = parseInt(userLogin.saldo);
        const jumlahSetoran =
          invalidMoney !== ""
            ? parseInt(values.jumlahSetoran) - invalidMoney
            : parseInt(values.jumlahSetoran);

        dispatch(incrementBalance(jumlahSetoran));
        const mutationData = [
          {
            userId: userLogin.id,
            transactionName: "Setor Tunai",
            transferToOrFrom: "-",
            transactionAmount: jumlahSetoran,
            endingBalance: saldo + jumlahSetoran,
            transactionDate: date.toISOString(),
            // transactionDate: new Intl.DateTimeFormat(["ban", "id"]).format(
            //   date
            // ),
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
    invalidMoney: Yup.number()
      .typeError("Jumlah setoran harus berupa angka")
      .max(10, "Maksimal 10"),
  });

  return (
    <ImageLayout src="/img/Wallet.png" width={700} hight={610}>
      <CardLayout title="Setor Tunai">
        {isValidWithDrawal ? (
          // <TransaksiBerhasil />
          <CofirmTampilkanSaldo />
        ) : (
          <Box display="flex" justifyContent="start" gap={5} flexWrap="wrap">
            <Box sx={{ width: "100%" }}>
              {isDifferentValues && (
                <AlertDataForm
                  title="jumlah pecahan tidak sesuai dengan jumlah setoran"
                  severityStatus="error"
                />
              )}
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "20px", xs: "12px" } }}
                  gutterBottom
                >
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

            <Box width={"100%"}>
              <Typography sx={{ fontSize: { lg: "20px", xs: "12px" } }}>
                Masukkan uang anda
              </Typography>
              <SimulationEnterMoney
                title={"uang 100.000"}
                handle={() => handleEnterMoney(100000)}
              />
              <SimulationEnterMoney
                title={"uang 50.000"}
                handle={() => handleEnterMoney(50000)}
              />
              <SimulationEnterMoney
                title={"uang 60.000"}
                handle={() => handleEnterMoney(60000)}
              />
              <SimulationEnterMoney
                title={"setoran 300.000, invalid 1 lembar"}
                handle={() => {
                  setInvalidMoney(1);
                  handleEnterMoney(300000);
                }}
              />
              <SimulationEnterMoney
                title={"setoran 200.000, invalid 2 lembar"}
                handle={() => {
                  setInvalidMoney(2);
                  handleEnterMoney(200000);
                }}
              />
              <Button
                onClick={() => route.push("/")}
                variant="contained"
                size="large"
                sx={{
                  margin: {
                    lg: "10px 0",
                    md: "8px 0",
                    sm: "8px 0",
                    xs: "8px 0",
                  },
                  fontSize: { lg: "20px", md: "16px", xs: "12px" },
                  padding: { lg: "15px 0", md: "12px 0", sm: "8px" },
                  width: "100%",
                  backgroundColor: "#FF6464",
                  ":hover": {
                    bgcolor: "#EE6363",
                  },
                }}
              >
                Kembali
              </Button>
            </Box>

            {/* <Formik
              initialValues={{ jumlahSetoran: "", invalidMoney: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setFieldError }) =>
                handleSubmit(values, setFieldError)
              }
            >
              <Form style={{ width: "100%" }}>
                <InputLabel
                  htmlFor="jumlahSetoran"
                  sx={{ fontSize: { lg: "20px", xs: "12px" }, color: "black" }}
                >
                  masukkan nilai setoran
                </InputLabel>
                <Field
                  autoComplete="off"
                  id="jumlahSetoran"
                  name="jumlahSetoran"
                />
                <Typography
                  sx={{ color: "red", fontSize: { lg: "18px", xs: "12px" } }}
                >
                  <ErrorMessage name="jumlahSetoran" />
                </Typography>

                <InputLabel
                  htmlFor="invalidMoney"
                  sx={{ fontSize: { lg: "20px", xs: "12px" }, color: "black" }}
                >
                  jumlah uang rusak
                </InputLabel>
                <Field
                  autoComplete="off"
                  id="invalidMoney"
                  name="invalidMoney"
                />
                <Typography
                  sx={{ color: "red", fontSize: { lg: "18px", xs: "12px" } }}
                >
                  <ErrorMessage name="invalidMoney" />
                </Typography>

                <ButtonTransaksi title="Setor Tunai" />
              </Form>
            </Formik> */}
          </Box>
        )}
      </CardLayout>
    </ImageLayout>
  );
}
