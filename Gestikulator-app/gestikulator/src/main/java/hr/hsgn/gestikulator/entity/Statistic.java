package hr.hsgn.gestikulator.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="statistics")
public class Statistic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long statisticId;
    private Long userId;
    private Long subLevelId;
    private Timestamp timestamp;
    private Long experience;
    private Boolean isSolved;

    public Statistic() {
    }

    public Statistic(Long statisticId, Long userId, Long subLevelId, Timestamp timestamp, Long experience, Boolean isSolved) {
        this.statisticId = statisticId;
        this.userId = userId;
        this.subLevelId = subLevelId;
        this.timestamp = timestamp;
        this.experience = experience;
        this.isSolved = isSolved;
    }

    public Long getStatisticId() {
        return statisticId;
    }

    public void setStatisticId(Long statisticId) {
        this.statisticId = statisticId;
    }

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
