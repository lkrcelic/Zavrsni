import * as React from "react";
import {Grid, Typography} from "@mui/material";
import {LevelCard, LevelsContainer} from "../styles";

export default function SubLevels({subLevels, setSubLevelIndexSelected}) {
  return (
    <>
      <Typography variant="h3" marginLeft={2} marginBottom={-2}>
        Odaberi podrazinu
      </Typography>
      <LevelsContainer>
        <Grid wrap={"nowrap"} container justifyContent="flex-start" spacing={4}>
          {subLevels.map((subLevel, index) => (
            <Grid item key={subLevel.id}>
              <LevelCard
                onClick={() => {
                  setSubLevelIndexSelected(index)
                }}
                disabled={subLevel.predeno}
              >
                <Typography variant="h4">{subLevel.podRazina}</Typography>
              </LevelCard>
            </Grid>
          ))}
        </Grid>
      </LevelsContainer>
    </>
  );
}
