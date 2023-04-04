import React from 'react';
import {Grid, Typography} from '@mui/material';
import {Card, Container} from '../styles';


const Levels = ({levels, currentLevel, onClick}) => {
  return (
    <>
      <Typography variant="h3" marginLeft={2} marginBottom={-2}>
        Odaberi razinu
      </Typography>
      <Container>
        <Grid wrap={"nowrap"} container justifyContent="flex-start" spacing={4}>
          {levels.map((level, index) => (
            <Grid item key={level.id}>
              <Card
                onClick={() => onClick(level.id)}
                disabled={level.predeno === '100%'}
                style={{
                  border: currentLevel === index ? '5px solid black' : '',
                }}
              >
                <Typography variant="h4">{level.razina}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Levels;
