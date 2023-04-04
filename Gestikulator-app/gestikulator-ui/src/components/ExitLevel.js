import React from 'react';
import ReactDOM from 'react-dom';
import {useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";


const ExitLevel = ({isShowing, hide}) => {
  const navigate = useNavigate();

  const exitHandler = () => {
    navigate('/');
  }
  if (isShowing)
    return (
      ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay"/>
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close"
                        onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h2>Sigurno želite izaći iz kviza?</h2>
              <p>
                <Button variant="dark" onClick={exitHandler}>DA</Button>
                <Button variant="dark" onClick={hide}>NE</Button>

              </p>
            </div>
          </div>
        </React.Fragment>, document.body
      )
    )
  else return null;
}

export default ExitLevel;
