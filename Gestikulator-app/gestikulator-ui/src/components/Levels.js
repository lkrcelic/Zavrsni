import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
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
const LevelCard = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CAF50',
  borderRadius: '40px',
  height: '200px',
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
}));

const LevelTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '25px',
  lineHeight: '29px',
  color: '#121212',
});

const Levels = ({ levels, currentLevel, onClick }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom marginLeft={2}>
        Odaberi razinu
      </Typography>
      <Container>
        <Grid wrap={"nowrap"} container justifyContent="flex-start" spacing={4}>
          {levels.map((level, index) => (
            <Grid item key={level.id}>
              <LevelCard
                onClick={() => onClick(level.id)}
                disabled={level.predeno === '100%'}
                style={{
                  border: currentLevel === index ? '5px solid black' : '',
                }}
              >
                <LevelTitle>{level.razina}</LevelTitle>
              </LevelCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Levels;
