package hr.hsgn.gestikulator.dto;

import hr.hsgn.gestikulator.entity.SubLevel;

public class SubLevelRequest {
    SubLevel subLevel;
    Boolean isSolved;

    public SubLevelRequest(SubLevel subLevel, Boolean isSolved){
        this.subLevel = subLevel;
        this.isSolved = isSolved;
    }

    public SubLevel getSubLevel() {
        return subLevel;
    }

    public void setSubLevel(SubLevel subLevel) {
        this.subLevel = subLevel;
    }

    public Boolean getSolved() {
        return isSolved;
    }

    public void setSolved(Boolean solved) {
        isSolved = solved;
    }

    public String toString(){
        return subLevel.getId() + " " + subLevel.getName() + " " + isSolved;
    }
}
