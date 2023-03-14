package hr.hsgn.gestikulator.dto;

import java.util.List;

public class SubLevelSummaryRequest {
    Long userId;
    Long subLevelId;
    Boolean isFinished;
    List<AnswerRequest> answers;

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

    public List<AnswerRequest> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswerRequest> answers) {
        this.answers = answers;
    }

    public Boolean getIsFinished() {
        return isFinished;
    }

    public void setIsFinished(Boolean finished) {
        isFinished = finished;
    }

    @Override
    public String toString() {
        return "SubLevelSummaryRequest{" +
                "userId=" + userId +
                ", subLevelId=" + subLevelId +
                ", answers=" + answers +
                ", isFinished=" + isFinished +
                '}';
    }
}
