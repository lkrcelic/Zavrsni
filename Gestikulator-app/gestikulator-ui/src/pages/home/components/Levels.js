import React from 'react';
import {Grid, Typography} from '@mui/material';
import {LevelCard, LevelsContainer} from '../styles';


const Levels = ({levels, currentLevel, onClick}) => {
  return (
    <>
      <Typography variant="h3" marginLeft={2} marginBottom={-2}>
        Odaberi razinu
      </Typography>
      <LevelsContainer>
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
                <Typography variant="h4">{level.razina}</Typography>
              </LevelCard>
            </Grid>
          ))}
        </Grid>
      </LevelsContainer>
    </>
  );
};

export default Levels;
