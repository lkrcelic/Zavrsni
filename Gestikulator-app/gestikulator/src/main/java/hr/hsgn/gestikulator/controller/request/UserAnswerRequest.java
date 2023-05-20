package hr.hsgn.gestikulator.controller.request;

public class UserAnswerRequest {

    private Long userId;
    private Long questionId;
    private Long givenGestureId;
    private Boolean isCorrect;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getGivenGestureId() {
        return givenGestureId;
    }

    public void setGivenGestureId(Long givenGestureId) {
        this.givenGestureId = givenGestureId;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean correct) {
        isCorrect = correct;
    }
}
