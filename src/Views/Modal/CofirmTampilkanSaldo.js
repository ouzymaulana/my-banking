import ButtonSubmit from "@/Components/Login/ButtonSubmit";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import TransaksiBerhasil from "../TransaksiBerhasil";
import { useDataUser } from "@/Context/DataUserContextProvider";
import Cookies from "js-cookie";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "white",
  // border: "8px solid #A2C37F",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  paddingX: 8,
};

export default function CofirmTampilkanSaldo() {
  const { dataUser } = useDataUser();
  const [open, setOpen] = useState(true);
  const [isTransaksiBerhasil, setIsTransaksiBerhasil] = useState(false);
  const [isShowBalance, setIsShowBalance] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const route = useRouter();

  const dataCookies = JSON.parse(Cookies.get("cookiesData"));
  const cookiesData = {
    ...dataCookies,
    isLogin: false,
  };

  Cookies.set("cookiesData", JSON.stringify(cookiesData));

  const handleClickYes = () => {
    handleClose();
    setIsTransaksiBerhasil(true);
    setIsShowBalance(true);
  };
  const handleClickNo = () => {
    handleClose();
    setIsTransaksiBerhasil(true);
  };

  return (
    <>
      {isTransaksiBerhasil ? (
        <TransaksiBerhasil showBalance={isShowBalance} />
      ) : (
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ borderRadius: "20px" }}
        >
          <Box sx={style} borderRadius={20}>
            <Typography
              id="modal-modal-description"
              sx={{ fontSize: { lg: 25, md: 20, sm: 18, xs: 15 } }}
            >
              Apakah Anda Ingin Saldo Anda Ditampilkan Setelah Transaksi ?
            </Typography>
            <Grid
              spacing={0}
              paddingTop={5}
              justifyContent="space-between"
              container
            >
              <Grid item xs={5}>
                <Button
                  onClick={handleClickNo}
                  variant="contained"
                  size="small"
                  sx={{
                    width: "100%",
                    fontSize: { lg: "18px", sm: "10px" },
                    padding: { lg: "6px 0", sm: "6px 0", xs: "3px 0" },
                    backgroundColor: "#B3C99C",
                    ":hover": {
                      bgcolor: "#A2C37F",
                    },
                  }}
                >
                  Tidak
                </Button>
              </Grid>
              <Grid xs={5} item>
                <Button
                  onClick={handleClickYes}
                  variant="contained"
                  size="small"
                  sx={{
                    width: "100%",
                    fontSize: { lg: "18px", sm: "10px" },
                    padding: { lg: "6px 0", sm: "6px 0", xs: "3px 0" },
                    backgroundColor: "#B3C99C",
                    ":hover": {
                      bgcolor: "#A2C37F",
                    },
                  }}
                >
                  Ya
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )}
    </>
  );
}
