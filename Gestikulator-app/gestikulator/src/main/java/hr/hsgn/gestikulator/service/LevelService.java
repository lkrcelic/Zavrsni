package hr.hsgn.gestikulator.service;

import java.util.List;

import hr.hsgn.gestikulator.dto.LevelRequest;
import hr.hsgn.gestikulator.dto.MainStateRequest;
import hr.hsgn.gestikulator.dto.SubLevelSummaryRequest;
import hr.hsgn.gestikulator.entity.Level;

public interface LevelService {

    List<Level> getLevels();

    List<LevelRequest> getLevelsWithSolved(Long userId);

    void solveSubLevel(SubLevelSummaryRequest subLevelSummaryRequest);

    MainStateRequest getMainState(Long userId);
}
