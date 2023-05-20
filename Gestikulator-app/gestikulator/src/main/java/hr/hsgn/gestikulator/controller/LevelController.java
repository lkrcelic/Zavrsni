package hr.hsgn.gestikulator.controller;

import java.util.List;

import hr.hsgn.gestikulator.controller.dto.LevelDTO;
import hr.hsgn.gestikulator.controller.request.LevelRequest;
import hr.hsgn.gestikulator.controller.request.MainStateRequest;
import hr.hsgn.gestikulator.controller.request.SubLevelSummaryRequest;
import hr.hsgn.gestikulator.entity.Level;
import hr.hsgn.gestikulator.service.LevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("levels")
public class LevelController {

    private final LevelService levelService;

    @Autowired
    public LevelController(LevelService levelService) {
        this.levelService = levelService;
    }

    @GetMapping
    public List<LevelDTO> getLevels(){ return levelService.getLevels(); }

    @GetMapping(value="/solved")
    public List<LevelRequest> getLevelsWithSolved(){ return levelService.getLevelsWithSolved(1L); }

    @GetMapping(value="/main")
    public MainStateRequest getMainState(@RequestBody Long userId){ return levelService.getMainState(userId); }

    @PostMapping("summary")
    public MainStateRequest solveSubLevel(@RequestBody SubLevelSummaryRequest subLevelSummaryRequest){
        levelService.solveSubLevel(subLevelSummaryRequest);
        return levelService.getMainState(subLevelSummaryRequest.getUserId());
    }
}
