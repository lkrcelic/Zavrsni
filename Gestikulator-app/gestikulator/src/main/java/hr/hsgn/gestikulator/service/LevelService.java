package hr.hsgn.gestikulator.service;

import java.util.List;

import hr.hsgn.gestikulator.controller.dto.LevelDTO;
import hr.hsgn.gestikulator.controller.request.LevelRequest;
import hr.hsgn.gestikulator.controller.request.MainStateRequest;
import hr.hsgn.gestikulator.controller.request.SubLevelSummaryRequest;
import hr.hsgn.gestikulator.entity.Level;

public interface LevelService {

    List<LevelDTO> getLevels();

    List<LevelRequest> getLevelsWithSolved(Long userId);

    void solveSubLevel(SubLevelSummaryRequest subLevelSummaryRequest);

    MainStateRequest getMainState(Long userId);
}
