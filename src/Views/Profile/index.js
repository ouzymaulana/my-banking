import CardLayout from "@/Layout/Card";
import { selectSecondDataUser } from "@/Redux/Slices/dataUsersSlice";
import React from "react";
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Typography, styled } from "@mui/material";
import ButtonSubmit from "@/Components/Login/ButtonSubmit";
import { useRouter } from "next/router";
import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";
import ImageLayout from "@/Layout/ImageLayout";

const DataProfile = styled(Typography)(({ theme }) => ({
  fontSize: { lg: 20, md: 16, sm: 12 },
}));

export default function ProfileView({ idInserCart }) {
  const dataUsers = useSelector(selectSecondDataUser);
  const route = useRouter();

  const handleOnclick = () => {
    route.push("/");
  };

  const dataUserLogin = dataUsers.find((data) => data.id == idInserCart);
  return (
    <ImageLayout src="/img/profile-details.png" width={850} hight={700}>
      <CardLayout title="Profile">
        <Box display="flex" justifyContent="center" fontSize={50}>
          <AccountCircleOutlinedIcon
            fontSize="large"
            sx={{ fontSize: "100px" }}
            color="disabled"
          />
        </Box>
        <Box display="flex" paddingY={4}>
          <Box flex={1}>
            <DataProfile>Nama</DataProfile>
            <DataProfile>Nomor Rekening</DataProfile>
            <DataProfile>Saldo</DataProfile>
          </Box>
          <Box flex={1} textAlign="right">
            {/* <Typography sx={{ fontSize: { lg: 20, md: 16, sm: 12 } }}> */}
            {/* </Typography> */}
            <DataProfile>{dataUserLogin.nama}</DataProfile>
            <DataProfile>{dataUserLogin.nomor}</DataProfile>
            <DataProfile>{formatCurrency(dataUserLogin.saldo)}</DataProfile>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <ButtonSubmit title="Kembali" handle={handleOnclick} />
        </Box>
      </CardLayout>
    </ImageLayout>
  );
}
