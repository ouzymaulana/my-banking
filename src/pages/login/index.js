import AlertDataForm from "@/Components/Alert/AlertDataForm";
import ButtonSubmit from "@/Components/Login/ButtonSubmit";
import CheckInsertCard, {
  CheckCookieInsertCardInLoginPage,
  CheckInsertCardAndLoginTwo,
} from "@/Helper/CheckLogin/CheckLogin";
import GuestLayout from "@/Layout/GuestLayout";
import ImageLayout from "@/Layout/ImageLayout";
import {
  deleteInvalidLoginTimeValue,
  selectSecondDataUser,
  setInvalidLoginValue,
} from "@/Redux/Slices/dataUsersSlice";
import { Box, FormControl, Grid, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import PinInput from "react-pin-input";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ idInserCart }) {
  const pinInputRef = useRef(null);
  const route = useRouter();
  const dispatch = useDispatch();
  const [ifInputNull, setIfInputNull] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const dataUsers = useSelector(selectSecondDataUser);
  const handleLogin = () => {
    const pinValue = pinInputRef.current.values;

    const userLogin = dataUsers.find((user) => user.id == idInserCart);

    if (userLogin.invaliLogin === 3) {
      const currentTime = new Date().getMinutes();
      if (userLogin.invalidLoginTime <= currentTime) {
        setInvalidLogin(false);
        dispatch(deleteInvalidLoginTimeValue(userLogin.id));
        loginConditioning(pinValue, userLogin);
      } else {
        setInvalidLogin(true);
        setAlertVisible(false);
        setIfInputNull(false);
      }
    }
    if (userLogin.invaliLogin < 3) {
      loginConditioning(pinValue, userLogin);
    }
  };

  function loginConditioning(pinValue, userLogin) {
    if (pinValue.some((value) => !value)) {
      setIfInputNull(true);
      setAlertVisible(false);
      setInvalidLogin(false);
    } else {
      if (userLogin.pin == pinValue.join("")) {
        const data = JSON.parse(Cookies.get("cookiesData"));

        const cookiesData = {
          ...data,
          isLogin: true,
        };
        Cookies.set("cookiesData", JSON.stringify(cookiesData), {
          expires: 1 / 24,
        });
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
  }

  useEffect(() => {
    const userLogin = dataUsers.find((user) => user.id == idInserCart);

    if (userLogin.invaliLogin == 3) {
      setInvalidLogin(true);
      setAlertVisible(false);
      setIfInputNull(false);
    } else {
      setInvalidLogin(false);
    }
  }, [dataUsers]);

  return (
    <GuestLayout title="MyBanking">
      <ImageLayout src="/img/OTP.png" width={800} hight={700}>
        <Grid paddingTop={20}>
          <Grid
            fontSize={35}
            display="flex"
            justifyContent="center"
            padding="20px"
          >
            <span>MyBanking</span>
          </Grid>
          <Grid
            columns={12}
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
              <Typography variant="h6">Masukkan Nomor Pin Anda</Typography>
              <PinInput
                className="inpuPin"
                ref={pinInputRef}
                length={6}
                initialValue=""
                secret
                secretDelay={500}
                onChange={(value, index) => {}}
                type="numeric"
                focus
                // inputStyle={{
                //   borderColor: "#BCBCBC",
                //   borderWidth: "3.2px",
                //   borderRadius: "8px",
                //   fontSize: "1.5em",
                //   width: { xs: "1rem", lg: "1rem" },
                //   height: { xs: "1rem", lg: "4rem" },
                // }}
                inputStyle={{
                  padding: { lg: "10px", sm: "5px", xs: "0px" },
                  borderColor: "#BCBCBC",
                  borderWidth: "3.2px",
                  borderRadius: "8px",
                  fontSize: "1.5em",
                  width: { xs: "10%", sm: "70%", md: "60%", lg: "50%" },
                  height: { xs: "1rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
                }}
                autoSelect={true}
              />
              <ButtonSubmit title="Login" handle={handleLogin} />
            </FormControl>
          </Grid>
        </Grid>
      </ImageLayout>
    </GuestLayout>
  );
}

export async function getServerSideProps(context) {
  let result = "";
  let idEnterCard = "";
  try {
    const cookiesData = context.req.cookies.cookiesData;

    if (cookiesData) {
      const parsedCookiesData = JSON.parse(cookiesData);
      idEnterCard = parsedCookiesData.idEnterCard;
      const isLogin = parsedCookiesData.isLogin;

      result = CheckInsertCardAndLoginTwo(idEnterCard, isLogin);
    } else {
      result = CheckCookieInsertCardInLoginPage(cookiesData);
    }
  } catch (error) {
    console.log(error);
    console.error(error);
  }

  if (result) {
    return result;
  }

  return {
    props: {
      idInserCart: idEnterCard,
    },
  };
}
