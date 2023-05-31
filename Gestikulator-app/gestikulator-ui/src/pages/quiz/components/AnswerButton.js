import {styled} from "@mui/system";
import {Button} from "@mui/material";

export const AnswerButton = styled(Button)(({ theme}) => ({
  width: 90,
  height: 90,
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'black',
  borderWidth: '3px',
  '&:hover': {
    borderColor: 'black',
  },
  '&:disabled': {
    borderColor: 'black',
    borderWidth: '3px',
  }
}));
