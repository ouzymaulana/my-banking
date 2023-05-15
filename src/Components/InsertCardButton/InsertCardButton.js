import { setDataUsers } from "@/Redux/Slices/dataUsersSlice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function InsertCardButton({ text, action, dataUserLogin }) {
  const route = useRouter();
  // const dispatch = useDispatch();
  // dispatch(setDataUsers(dataUserLogin));

  const handleInsertCardA = async () => {
    const user = dataUserLogin.find((user) => user.id === 1);

    const cookiesData = {
      idEnterCard: user.id,
    };
    Cookies.set("cookiesData", JSON.stringify(cookiesData), {
      expires: 1 / 24,
    });
    // Cookies.set("idEnterCard", user.id, { expires: 1 / 24 });
    route.push("/login");
  };

  const handleInsertCardB = async () => {
    const user = dataUserLogin.find((user) => user.id === 2);
    // Cookies.set("idEnterCard", user.id, { expires: 1 / 24 });

    const cookiesData = {
      idEnterCard: user.id,
    };
    Cookies.set("cookiesData", JSON.stringify(cookiesData), {
      expires: 1 / 24,
    });
    route.push("/login");
  };

  return (
    <Button
      onClick={
        action == "handleInsertCardA" ? handleInsertCardA : handleInsertCardB
      }
      variant="contained"
      size="large"
      sx={{
        margin: "10px 0",
        fontSize: "20px",
        padding: "15px 0",
        width: "100%",
        backgroundColor: "#B3C99C",
        ":hover": {
          bgcolor: "#A2C37F",
        },
      }}
    >
      {text}
    </Button>
  );
}
