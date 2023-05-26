import AlertDataForm from "@/Components/Alert/AlertDataForm";
import { updateBalance } from "@/Redux/Slices/dataUsersSlice";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import TransaksiBerhasil from "../TransaksiBerhasil";
import { useRouter } from "next/router";
import ButtonTransaksi from "@/Components/Login/ButtonTransaksi";
import SelectButton from "@/Components/TarikTunai/SelectButton";
import { useDataUser } from "@/Context/DataUserContextProvider";
import Cookies from "js-cookie";
import { createMutasiRekening } from "@/Redux/Slices/mutasiRekeningSlice";
import CofirmTampilkanSaldo from "../Modal/CofirmTampilkanSaldo";
import Image from "next/image";

export default function OtherOptionView({ idInserCart }) {
  const [isSelectButtom, setIsSelectButton] = useState(false);
  const [selectButtonValue, setSelectButtonValue] = useState("");
  const [isValidWithDrawal, setIsValidWithDrawal] = useState(false);
  const [insufficientBalance, setInsufficientBalance] = useState(false);

  // const { dataUsers } = useSelector(selectDataUser);
  const { dataUser } = useDataUser();
  const dispatch = useDispatch();
  const route = useRouter();

  // const userLogin = dataUsers.find((user) => user.id == idInserCart);

  const handleSubmit = (values, setFieldError) => {
    if (selectButtonValue !== "") {
      if (values.jumlahPenarikan % selectButtonValue === 0) {
        if (parseInt(dataUser.saldo) > values.jumlahPenarikan) {
          dispatch(updateBalance(values.jumlahPenarikan));

          const date = new Date();
          const mutationData = [
            {
              userId: dataUser.id,
              transactionName: "Tarik Tunai",
              transferToOrFrom: "-",
              transactionAmount: values.jumlahPenarikan,
              endingBalance: dataUser.saldo - values.jumlahPenarikan,
              transactionDate: date.toISOString(),
            },
          ];

          dispatch(createMutasiRekening(mutationData));
          setIsValidWithDrawal(true);
          setInsufficientBalance(false);
        } else {
          // saldo tidak cukup
          setInsufficientBalance(true);
        }
      } else {
        setFieldError(
          "jumlahPenarikan",
          "nilai yang anda masukkan tidak sesusai dengan pecahan"
        );
      }
    } else {
      setIsSelectButton(true);
    }
  };

  const validationSchema = Yup.object({
    jumlahPenarikan: Yup.number()
      .typeError("Jumlah penarikan harus berupa angka")
      .required("Jumlah penarikan harus diisi"),
  });

  return (
    <>
      <Grid
        container
        columns={12}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={{ xs: "wrap" }}
      >
        <Box
          sx={{ display: { xs: "none", md: "none", lg: "block" } }}
          component={Grid}
          container
          lg={6}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"50px"}
        >
          <Image
            src="/img/withdrawing-money.png"
            width={800}
            height={700}
            alt="atm-card"
          />
        </Box>
        <Box
          borderRadius={2}
          padding={5}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            height: "max-content",
          }}
          maxWidth={"50rem"}
          marginTop={8}
        >
          {isValidWithDrawal ? (
            // <TransaksiBerhasil />
            <CofirmTampilkanSaldo />
          ) : (
            <Box
              display="flex"
              justifyContent="start"
              gap={5}
              flexWrap="wrap"
              // sx={{ backgroundColor: "red" }}
            >
              {isSelectButtom && (
                <AlertDataForm
                  title="jumlah pecahan harus dipilih"
                  severityStatus="error"
                />
              )}

              {insufficientBalance && (
                <AlertDataForm
                  title="Saldo anda tidak cukup untuk melakukan transaksi"
                  severityStatus="error"
                />
              )}

              <Box sx={{ width: "100%" }}>
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    Pilih Jumlah Pecahan
                  </Typography>
                </Box>
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
                initialValues={{ jumlahPenarikan: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setFieldError }) =>
                  handleSubmit(values, setFieldError)
                }
              >
                <Form style={{ width: "100%" }}>
                  <label htmlFor="jumlahPenarikan">
                    Masukkan Jumlah Tarik Tunai
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
                    id="jumlahPenarikan"
                    name="jumlahPenarikan"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A2C37F";
                    }}
                  />
                  <span style={{ color: "red" }}>
                    <ErrorMessage name="jumlahPenarikan" />
                  </span>

                  <ButtonTransaksi title="Tarik Tunai" />
                </Form>
              </Formik>
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
}
