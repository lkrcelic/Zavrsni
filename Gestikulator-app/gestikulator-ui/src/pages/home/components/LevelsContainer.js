import {styled} from '@mui/system';
import {Box} from '@mui/material';

export const LevelsContainer = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.secondary.lighterVariant3,
  borderRadius: '42px',
  padding: theme.spacing(3),
  margin: theme.spacing(2, 0),
  overflowX: 'auto',
  display: 'flex',
  '&::-webkit-scrollbar': {
    height: '8px',
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
}));
