package hr.hsgn.gestikulator.controller.request;

import java.sql.Timestamp;

public class StatisticRequest {
    private Long userId;
    private Long subLevelId;
    private Timestamp timestamp;
    private Long experience;
    private Boolean isSolved;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSubLevelId() {
        return subLevelId;
    }

    public void setSubLevelId(Long subLevelId) {
        this.subLevelId = subLevelId;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Long getExperience() {
        return experience;
    }

    public void setExperience(Long experience) {
        this.experience = experience;
    }

    public Boolean getSolved() {
        return isSolved;
    }

    public void setSolved(Boolean solved) {
        isSolved = solved;
    }
}
