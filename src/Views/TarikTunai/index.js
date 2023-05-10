import AlertDataForm from "@/Components/Alert/AlertDataForm";
import { selectDataUser, updateBalance } from "@/Redux/Slices/dataUsersSlice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransaksiBerhasil from "../TransaksiBerhasil";
import SelectButton from "@/Components/TarikTunai/SelectButton";

export default function TarikTunaiView({ idInserCart }) {
  const route = useRouter();
  const { dataUsers } = useSelector(selectDataUser);
  const dispatch = useDispatch();
  const [jumlahPenarikan, setJumlahPenarikan] = useState(0);
  const [validPenarikan, setValidPenarikan] = useState(false);
  const [invalidPenarikan, setInvalidPenarikan] = useState(false);

  const handleOnClickButtonConfirm = () => {
    const userLogin = dataUsers.find((user) => user.id == idInserCart);

    if (userLogin.saldo > jumlahPenarikan) {
      dispatch(updateBalance(jumlahPenarikan));
      setValidPenarikan(true);
    } else {
      setInvalidPenarikan(true);
    }
  };
  return (
    <>
      <Box>
        <Box
          fontSize={25}
          display="flex"
          paddingLeft={3}
          paddingBottom={2}
          justifyContent="start"
        >
          <span>Tarik Tunai</span>
        </Box>
        <Box borderRadius={2} padding={5} sx={{ backgroundColor: "white" }}>
          {invalidPenarikan && (
            <AlertDataForm
              title="Transaksi Gagal, Saldo Anda Tidak Cukup"
              severityStatus="error"
            />
          )}

          {validPenarikan ? (
            <TransaksiBerhasil />
          ) : (
            <Box
              display="flex"
              justifyContent="space-between"
              gap={5}
              flexWrap="wrap"
              // sx={{ backgroundColor: "red" }}
            >
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlah={50000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlah={100000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlah={200000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlah={300000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlah={500000}
              />
              <SelectButton
                setJumlahPenarikan={setJumlahPenarikan}
                jumlah={1000000}
              />

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
                    padding: "5px 60px",
                    backgroundColor: "#F28D8D",
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
        </Box>
      </Box>
    </>
  );
}
