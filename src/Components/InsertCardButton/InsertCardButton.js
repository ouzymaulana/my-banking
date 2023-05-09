import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function InsertCardButton({ text, action }) {
  const route = useRouter();

  const handleInsertCardA = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      const user = data.find((user) => user.id === 1);

      // dispatch(setIdLogin(user.id));
      // dispatch(setDataUsers(data));
      localStorage.setItem("IdLogin", JSON.stringify(user.id));
      Cookies.set("idEnterCard", user.id, { expires: 1 / 24 });
      route.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInsertCardB = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      const user = data.find((user) => user.id === 2);

      Cookies.set("idEnterCard", user.id, { expires: 1 / 24 });

      localStorage.setItem("IdLogin", JSON.stringify(user.id));
      route.push("/login");
    } catch (error) {
      console.error(error);
    }
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
