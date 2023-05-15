import CardLayout from "@/Layout/Card";
import { selectSecondDataUser } from "@/Redux/Slices/dataUsersSlice";
import React from "react";
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box, Typography } from "@mui/material";
import ButtonSubmit from "@/Components/Login/ButtonSubmit";
import { useRouter } from "next/router";
import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";

export default function ProfileView({ idInserCart }) {
  const dataUsers = useSelector(selectSecondDataUser);
  const route = useRouter();

  const handleOnclick = () => {
    route.push("/");
  };

  const dataUserLogin = dataUsers.find((data) => data.id == idInserCart);
  return (
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
          <Typography variant="h6">Nama</Typography>
          <Typography variant="h6">Nomor Rekening</Typography>
          <Typography variant="h6">Saldo</Typography>
        </Box>
        <Box flex={1} textAlign="right">
          <Typography variant="h6">{dataUserLogin.nama}</Typography>
          <Typography variant="h6">{dataUserLogin.nomor}</Typography>
          <Typography variant="h6">
            {formatCurrency(dataUserLogin.saldo)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <ButtonSubmit title="Kembali" handle={handleOnclick} />
      </Box>
    </CardLayout>
  );
}
