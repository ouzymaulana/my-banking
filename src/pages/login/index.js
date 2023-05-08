import AlertDataForm from "@/Components/Alert/AlertDataForm";
import theme from "@/Helper/theme";
import GuestLayout from "@/Layout/GuestLayout";
import { selectDataUser } from "@/Redux/Slices/dataUsersSlice";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import PinInput from "react-pin-input";
import { useSelector } from "react-redux";

export default function Login() {
  const pinInputRef = useRef(null);
  const route = useRouter();
  const [ifInputNull, setIfInputNull] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const { dataUsers } = useSelector(selectDataUser);

  const handleLogin = () => {
    const pinValue = pinInputRef.current.values;

    console.log(dataUsers);
    console.log(pinValue.join(""));
    if (pinValue.some((value) => !value)) {
      setIfInputNull(true);
    } else {
      if (dataUsers.pin == pinValue.join("")) {
        // membuat data id login
        route.push("/");
      } else {
        setAlertVisible(true);
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
