import {styled} from '@mui/system';
import {Box} from '@mui/material';

export const Container = styled(Box)(({theme}) => ({
  backgroundColor: '#BBDDFA',
  borderRadius: '42px',
  padding: theme.spacing(4),
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
