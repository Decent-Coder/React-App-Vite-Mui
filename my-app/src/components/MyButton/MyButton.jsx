import { Button, Typography } from "@mui/material";
import "./MyButton.scss";

function MyButton() {
  return (
    <div>
      <Typography variant="div">
        <Button
          className="my-button"
          onClick={() => alert("Your base code is set !")}
        >
          Clicked Me!
        </Button>
      </Typography>
    </div>
  );
}

export default MyButton;
