import {styled} from "@mui/system";
import {Button} from "@mui/material";

export const LevelCard = styled(Button)(({theme, active}) => ({
  borderRadius: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  border: active ? '5px solid black' : 'none',

  // Default styles for desktop
  height: '160px',
  width: '160px',

  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
  },
  "&.MuiButton-root": {
    backgroundColor: '#4CAF50'
  },
}));

