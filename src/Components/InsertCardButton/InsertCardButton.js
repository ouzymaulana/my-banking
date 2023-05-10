import { setDataUsers } from "@/Redux/Slices/dataUsersSlice";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function InsertCardButton({ text, action, dataUserLogin }) {
  const dispatch = useDispatch();
  const route = useRouter();

  // dispatch(setDataUsers(dataUserLogin));

  const handleInsertCardA = async () => {
    // try {
    //   const response = await fetch("/api/user");
    //   const data = await response.json();
    // } catch (error) {
    //   console.error(error);
    // }
    const user = dataUserLogin.find((user) => user.id === 1);

    localStorage.setItem("IdLogin", JSON.stringify(user.id));
    Cookies.set("idEnterCard", user.id, { expires: 1 / 24 });
    route.push("/login");
  };

  const handleInsertCardB = async () => {
    const user = dataUserLogin.find((user) => user.id === 2);
    Cookies.set("idEnterCard", user.id, { expires: 1 / 24 });
    localStorage.setItem("IdLogin", JSON.stringify(user.id));
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
      {/* <FontAwesomeIcon icon={faPrint} />  */}
      {text}
    </Button>
  );
}
