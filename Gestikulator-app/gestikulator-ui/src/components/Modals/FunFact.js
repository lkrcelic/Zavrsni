import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px 32px 32px 32px",
};

const FunFact = (props) => {
  return (
    <div>
      <Modal
        open={props.state}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ArrowUpwardRoundedIcon fontSize="large" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Odaberi razinu
          </Typography>
          <Typography component="h6" />
          {props.num}/5
          <Typography />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ovdje se odabire poglavlje koje želiš vježbati.
            {props.num}
          </Typography>
          <Button onClick={props.close}>Zatvori</Button>
          {props.num != 5 ? (
            <Button onClick={props.openNext}>Dalje</Button>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
};
export default FunFact;
