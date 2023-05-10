import AlertDataForm from "@/Components/Alert/AlertDataForm";
import CheckInsertCard, {
  CheckInsertCardInLoginPage,
} from "@/Helper/CheckLogin/CheckLogin";
import GuestLayout from "@/Layout/GuestLayout";
import {
  selectDataUser,
  setInvalidLoginValue,
} from "@/Redux/Slices/dataUsersSlice";
import { Box, Button, FormControl } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import PinInput from "react-pin-input";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ idInserCart }) {
  const pinInputRef = useRef(null);
  const route = useRouter();
  const dispatch = useDispatch();
  const [ifInputNull, setIfInputNull] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const { dataUsers } = useSelector(selectDataUser);
  const getIdLogin = JSON.parse(localStorage.getItem("IdLogin"));

  const handleLogin = () => {
    const pinValue = pinInputRef.current.values;

    if (dataUsers.length === 0) {
      // Data pengguna kosong, tindakan yang sesuai di sini
      return;
    }

    const userLogin = dataUsers.find((user) => user.id === getIdLogin);

    if (pinValue.some((value) => !value)) {
      setIfInputNull(true);
      setAlertVisible(false);
      setInvalidLogin(false);
    } else {
      if (userLogin.pin == pinValue.join("")) {
        route.push("/");
      } else {
        if (userLogin.invaliLogin !== 3) {
          dispatch(setInvalidLoginValue(userLogin.id));
          setAlertVisible(true);
          setIfInputNull(false);
          setInvalidLogin(false);
        } else {
          setInvalidLogin(true);
          setAlertVisible(false);
          setIfInputNull(false);
        }
      }
    }
  };

  return (
    <GuestLayout title="MyBanking">
      <Box paddingTop={20}>
        <Box
          fontSize={35}
          display="flex"
          justifyContent="center"
          padding="20px"
        >
          <span>MyBanking</span>
        </Box>
        <Box
          borderRadius={2}
          padding={5}
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.822)" }}
        >
          {ifInputNull && (
            <AlertDataForm title="Pin Harus 6 angka" severityStatus="error" />
          )}
          {alertVisible && (
            <AlertDataForm title="Pin Tidak Valid" severityStatus="error" />
          )}
          {invalidLogin && (
            <AlertDataForm
              title="Anda memasukkan PIN tidak valid 3x, Anda dapat mengakses kembali dalam satu jam kedepan"
              severityStatus="error"
            />
          )}
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <PinInput
              ref={pinInputRef}
              length={6}
              initialValue=""
              secret
              secretDelay={500}
              onChange={(value, index) => {}}
              type="numeric"
              focus
              style={{
                padding: "10px",
                display: "flex",
                gap: "20px",
                justifyContent: "space-evenly",
                marginBottom: "20px ",
              }}
              inputStyle={{
                borderColor: "#BCBCBC",
                borderWidth: "3.2px",
                borderRadius: "8px",
                fontSize: "1.5em",
                width: "5rem",
                height: "4rem",
              }}
              // onComplete={(value, index) => handleLogin(value, index)}
              autoSelect={true}
            />
            <Button
              type="submit"
              onClick={handleLogin}
              variant="contained"
              size="large"
              sx={{
                fontSize: "20px",
                padding: "10px 0",
                backgroundColor: "#B3C99C",
                ":hover": {
                  bgcolor: "#A2C37F",
                },
              }}
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </Box>
    </GuestLayout>
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
