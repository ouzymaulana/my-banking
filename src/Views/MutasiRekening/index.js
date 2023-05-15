import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CardLayout from "@/Layout/Card";
import { useDataUser } from "@/Context/DataUserContextProvider";
import { useSelector } from "react-redux";
import { selectMutasiRekening } from "@/Redux/Slices/mutasiRekeningSlice";
import ButtonSubmit from "@/Components/Login/ButtonSubmit";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import theme from "@/Helper/theme";
import { formatCurrency } from "@/Helper/Formatcurrency/formarCurrency";
import Cookies from "js-cookie";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#C9DBB2",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MutasiRekening() {
  const route = useRouter();
  const { dataUser } = useDataUser();
  const mutasiRekening = useSelector(selectMutasiRekening);
  const id = JSON.parse(Cookies.get("cookiesData")).idEnterCard;

  const getMutasiRekeningById = mutasiRekening.filter((data) => data.id === id);
  return (
    <>
      <Box
        fontSize={25}
        display="flex"
        paddingLeft={3}
        paddingBottom={2}
        justifyContent="start"
      >
        <span>Mutasi Rekening</span>
      </Box>
      <Box borderRadius={2} padding={2} sx={{ backgroundColor: "white" }}>
        <TableContainer component={Paper} sx={{ marginBottom: "20px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Jenis transaksi</StyledTableCell>
                <StyledTableCell align="left">Jumlah Transaksi</StyledTableCell>
                <StyledTableCell align="left">Saldo Akhir</StyledTableCell>
                <StyledTableCell align="left">
                  Tanggal Transaksi
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getMutasiRekeningById.length === 0 ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={4}>kosong</StyledTableCell>
                </StyledTableRow>
              ) : (
                getMutasiRekeningById.map((row) => (
                  <StyledTableRow key={row.userId}>
                    <StyledTableCell align="left">
                      {row.transactionName}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {formatCurrency(row.transactionAmount)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {formatCurrency(row.endingBalance)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.transactionDate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          onClick={() => route.push("/")}
          variant="contained"
          size="large"
          sx={{
            color: "black",
            width: "100%",
            fontSize: "16px",
            padding: "8px 0",
            backgroundColor: "#B3C99C",
            ":hover": {
              bgcolor: "#A2C37F",
            },
          }}
        >
          Kembali
        </Button>
      </Box>
    </>
  );
}
