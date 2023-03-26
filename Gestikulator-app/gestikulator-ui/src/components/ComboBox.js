import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import Dictionary from "./Dictionary";
import {useState} from "react";

const ComboBox  = () =>{
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [video, setVideo] = useState('');



  function onChange(e, label) {
    setShow(true);

    axios({
      method: "get",
      url: "gestures/" + label.label.toLowerCase(),
    })
        .then(function (response) {
          console.log(response);
          setShow(true);
          setName(response.data.description);
          setVideo(response.data.uri);
        }).catch(err => {
      if (!err.response) {
        console.log(err);
        alert('Nije moguće komunicirati sa poslužiteljem! Provjerite da li je upaljen..');
        return;
      }

      const code = err.response.status;

      if (code >= 500) {
        alert('Problem sa serverom! Pogledajte ispise..');
        return;
      }

      if (code === 401) {
        alert('Niste autentificirani!');
        this.props.history.push('/');
        return;
      }

      alert('Nepoznata greška! ' + JSON.stringify(err));
    });
  }
  return (
      <div>
    <Autocomplete
      disablePortal
      id="combo-box"
      onChange={onChange}
      options={dictionary.sort((a, b) => (a.label > b.label) ? 1 : -1)}
      sx={{ width: 300}}
      renderInput={(params) => <TextField {...params} label="Pretraži rječnik" />}

    />
        <Dictionary isShowing={show}
                    name={name}
                    urlVideo={video}
                    hide={() => {
                      setShow(false);
                    }}        />

      </div>

  );
}

// todo dohvatiti sa apija
const dictionary = [
  { label: 'Ime'},
  { label: 'Prezime'},
  { label: 'Godina'},
  { label: 'Kako se zoveš'},
  { label: 'Gluh'},
  { label: 'Nagluh'},
  { label: 'Čujući'},
  { label: 'Ja'},
  { label: 'Ti'},
  { label: 'On/Ona/Ono'},
  { label: 'Mi'},
  { label: 'Vi'},
  { label: 'Oni/One/Ona'},
  { label: 'Žena'},
  { label: 'Muškarac'},
  { label: 'Dijete'},
  { label: 'Beba'},
  { label: 'Osoba'},
  { label: 'Čovjek'},
  { label: 'Upoznati'},
  { label: 'Ponoviti'},
  { label: 'Razumijem'},
  { label: 'Ne razumijem'},
  { label: 'Napisati'},
  { label: 'Govoriti'},
  { label: 'Znakovati'},
  { label: 'Bok!'},
  { label: 'Drago mi je'},
  { label: 'Da'},
  { label: 'Ne'},
  { label: 'Oprostite'},
  { label: 'Molim'},
  { label: 'Hvala'},
  { label: 'Nema problema'},
  { label: 'Vidimo se'},
  { label: 'Dobro jutro'},
  { label: 'Dobar dan'},
  { label: 'Dobra večer'},
  { label: 'Laku noć'},
  { label: 'Dobar tek'},

];

export default ComboBox;