import React from 'react';
import {Grid, Typography} from '@mui/material';
import {LevelCard, LevelsContainer} from './index';


const Levels = ({levels, currentLevelId, onClick}) => {

  return (
    <>
      <Typography variant="h3" marginLeft={2} marginBottom={-2}>
        Odaberi razinu
      </Typography>
      <LevelsContainer>
        <Grid wrap={"nowrap"} container justifyContent="flex-start" spacing={4}>
          {levels.map((level, index) => (
            <Grid item key={index}>
              <LevelCard
                onClick={() => onClick(level.id)}
                isActive={currentLevelId === level.id}
              >
                <Typography variant="h4">{level.name}</Typography>
              </LevelCard>
            </Grid>
          ))}
        </Grid>
      </LevelsContainer>
    </>
  );
};

export default Levels;
