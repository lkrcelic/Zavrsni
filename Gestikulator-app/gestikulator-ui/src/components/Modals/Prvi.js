import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const style = {
  position: "absolute",
  top: "570px",
  left: "885px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "12px 32px 15px 32px",
};

const spanStyle = {
  fontSize: "14px",
  display: "inline-block",
  float: "right",
};

const font_text = {
  color: "#121212",
  fontFamily: "Montserrat",
};
const modal_button = {
  justifySelf: "flex-end",
  color: "#121212",
  fontFamily: "Montserrat",
  fontWeight: "600",
  marginTop: "10px",
};

const Prvi = (props) => {
  return (
    <div>
      <Modal
        hideBackdrop
        open={props.state}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ArrowUpwardRoundedIcon fontSize="large"/>
          <span style={spanStyle}> {props.num}/4</span>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={font_text}
          >
            Odaberi razinu{" "}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={({marginTop: 2}, font_text)}
          >
            Ovdje se odabire poglavlje koje želiš vježbati.
          </Typography>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <Button onClick={props.close} sx={modal_button}>
              Zatvori
            </Button>
            <Button onClick={props.openNext} sx={modal_button}>
              Dalje
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Prvi;
