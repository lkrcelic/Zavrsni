import React from 'react';
import ReactDOM from 'react-dom';

const FunFact = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h2>ZANIMLJIVOST DANA</h2>
        <h1>Znakovni jezik nije univerzalni jezik
        </h1>
        <p>

          U svijetu postoji oko 130 različitih znakovnih jezika. Svaka država ima svoj znakovni jezik. Npr., američki
          znakovni i britanski znakovni uopće nisu slični.

          Postoji Međunarodni znakov(n)i – sustav dogovorenih znakova preuzetih iz različitih znakovnih jezika. Koristi
          se za sporazumijevanje na predavanjima, seminarima, konferencijama na kojima se prisutne gluhe osobe iz
          različitih dijelova svijeta.

        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default FunFact;
