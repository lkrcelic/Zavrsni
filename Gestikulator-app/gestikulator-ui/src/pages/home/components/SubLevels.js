import * as React from "react";
import {Grid, Typography} from "@mui/material";
import {LevelCard, LevelsContainer} from "./index";

export default function SubLevels({subLevels, currentSubLevelId, setSelectedSubLevelId}) {
  return (
    <>
      <Typography variant="h3" marginLeft={2} marginBottom={-2}>
        Odaberi podrazinu
      </Typography>
      <LevelsContainer>
        <Grid wrap={"nowrap"} container justifyContent="flex-start" spacing={4}>
          {subLevels.map((subLevel, index) => (
            <Grid item key={index}>
              <LevelCard
                onClick={() => {
                  setSelectedSubLevelId(subLevel.id)
                }}
                isActive={currentSubLevelId === subLevel.id}
              >
                <Typography variant="h4">{subLevel.name}</Typography>
              </LevelCard>
            </Grid>
          ))}
        </Grid>
      </LevelsContainer>
    </>
  );
}
