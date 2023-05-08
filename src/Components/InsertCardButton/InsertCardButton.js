import { setDataUsers } from "@/Redux/Slices/dataUsersSlice";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function InsertCardButton({ text, action }) {
  const route = useRouter();
  const dispatch = useDispatch();

  const handleInsertCardA = async () => {
    try {
      // cek data dalam local storage

      const response = await fetch("/api/user");
      const data = await response.json();
      const user = data.find((user) => user.id === 1);
      dispatch(setDataUsers(user));
      route.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  const handleInsertCardB = () => {
    console.log("B");
  };
  const invalidCard = () => {
    console.log("invalidCard");
  };

  return (
    <Button
      onClick={
        action == "handleInsertCardA"
          ? handleInsertCardA
          : action === "handleInsertCardB"
          ? handleInsertCardB
          : invalidCard
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
