package hr.hsgn.gestikulator.dto;

import hr.hsgn.gestikulator.entity.Level;

import java.util.ArrayList;
import java.util.List;

public class LevelRequest {
    private Long levelId;
    private String name;
    List<SubLevelRequest> subLevels;
    private Float percentageSolved;

    public LevelRequest(Level level, List<Boolean> areSolved){
        this.levelId = level.getLevelId();
        this.name = level.getName();
        this.subLevels = new ArrayList<>();
        int solved = 0;
        for(int i = 0; i < areSolved.size(); i++){
            this.subLevels.add(new SubLevelRequest(level.getSubLevels().get(i), areSolved.get(i)));
            solved += areSolved.get(i) ? 1 : 0;
        }
        this.percentageSolved = areSolved.size() == 0 ? 0 : 1f * solved / areSolved.size();
    }

    public Long getLevelId() {
        return levelId;
    }

    public void setLevelId(Long levelId) {
        this.levelId = levelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SubLevelRequest> getSubLevels() {
        return subLevels;
    }

    public void setSubLevels(List<SubLevelRequest> subLevels) {
        this.subLevels = subLevels;
    }

    public Float getPercentageSolved() {
        return percentageSolved;
    }

    public void setPercentageSolved(Float percentageSolved) {
        this.percentageSolved = percentageSolved;
    }
}
