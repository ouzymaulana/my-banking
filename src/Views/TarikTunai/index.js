import AlertDataForm from "@/Components/Alert/AlertDataForm";
import {
  selectSecondDataUser,
  updateBalance,
} from "@/Redux/Slices/dataUsersSlice";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransaksiBerhasil from "../TransaksiBerhasil";
import SelectButton from "@/Components/TarikTunai/SelectButton";
import { createMutasiRekening } from "@/Redux/Slices/mutasiRekeningSlice";
import Cookies from "js-cookie";
import CardLayout from "@/Layout/Card";

export default function TarikTunaiView({ idInserCart }) {
  const route = useRouter();
  const dataUsers = useSelector(selectSecondDataUser);
  const dispatch = useDispatch();
  const [jumlahPenarikan, setJumlahPenarikan] = useState(0);
  const [validPenarikan, setValidPenarikan] = useState(false);
  const [invalidPenarikan, setInvalidPenarikan] = useState(false);

  const handleOnClickButtonConfirm = () => {
    const userLogin = dataUsers.find((user) => user.id == idInserCart);

    if (userLogin.saldo > jumlahPenarikan) {
      dispatch(updateBalance(jumlahPenarikan));

      const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;
      const userLogin = dataUsers.find((user) => user.id === id);
      const date = new Date();

      const mutationData = [
        {
          userId: userLogin.id,
          transactionName: "Tarik Tunai",
          transactionAmount: jumlahPenarikan,
          endingBalance: userLogin.saldo,
          transactionDate: new Intl.DateTimeFormat(["ban", "id"]).format(date),
        },
      ];

      dispatch(createMutasiRekening(mutationData));
      setValidPenarikan(true);
      setInvalidPenarikan(false);
    } else {
      setInvalidPenarikan(true);
    }
  };
  return (
    <>
      <CardLayout title="Tarik Tunai">
        {invalidPenarikan && (
          <AlertDataForm
            title="Transaksi Gagal, Saldo Anda Tidak Cukup"
            severityStatus="error"
          />
        )}

        {validPenarikan ? (
          <TransaksiBerhasil />
        ) : (
          <Box display="flex" gap={2} flexWrap="wrap">
            <Box>
              <Typography variant="h6" gutterBottom>
                Pilih Jumlah Tarik Tunai
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              gap={5}
              flexWrap="wrap"
              paddingBottom={2}
            >
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlahPenarikan={jumlahPenarikan}
                jumlah={50000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlahPenarikan={jumlahPenarikan}
                jumlah={100000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlahPenarikan={jumlahPenarikan}
                jumlah={200000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlahPenarikan={jumlahPenarikan}
                jumlah={300000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlahPenarikan={jumlahPenarikan}
                jumlah={500000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlahPenarikan={jumlahPenarikan}
                jumlah={1000000}
              />
            </Box>

            <Box
              display="flex"
              sx={{ width: "100%" }}
              paddingBottom={2}
              justifyContent="end"
            >
              <Button
                onClick={() => route.push("/tarik-tunai/otherOptions")}
                sx={{
                  border: "2.5px solid #A2C37F",
                  color: "#A2A97F",
                  ":hover": {
                    border: "2.5px solid #839f66",
                    color: "#A2A97F",
                  },
                }}
                variant="outlined"
                size="large"
              >
                Pilihan Lainnya
              </Button>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Button
                onClick={() => route.push("/")}
                variant="contained"
                size="large"
                sx={{
                  fontSize: "18px",
                  padding: "8px 60px",
                  backgroundColor: "#FF6464",
                  ":hover": {
                    bgcolor: "#EE6363",
                  },
                }}
              >
                Batal
              </Button>

              <Button
                onClick={() => handleOnClickButtonConfirm()}
                variant="contained"
                size="large"
                sx={{
                  fontSize: "18px",
                  padding: "8px 60px",
                  backgroundColor: "#B3C99C",
                  ":hover": {
                    bgcolor: "#A2C37F",
                  },
                }}
              >
                Tarik Tunai
              </Button>
            </Box>
          </Box>
        )}
      </CardLayout>
    </>
  );
}
