import React from 'react';
import ReactDOM from 'react-dom';
import TextField from "@mui/material/TextField";

var currentVideo = "Gluh_1.MP4"

const Dictionary = ({ isShowing, hide, name, urlVideo }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1>{name}</h1>
        {/*<div className="search">*/}
        {/*  <TextField*/}
        {/*    id="outlined-basic"*/}
        {/*    variant="outlined"*/}
        {/*    fullWidth*/}
        {/*    label="Pronađi riječi"*/}
        {/*  />*/}
        {/*</div>*/}
        <video width="80%" loop autoPlay>
          <source src={require('../assets/' + currentVideo)} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Dictionary;