package hr.hsgn.gestikulator.controller.request;

public class AnswerRequest {
    private Long questionId;
    private Long givenGestureId;
    private Boolean isCorrect;

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

    @Override
    public String toString() {
        return "AnswerRequest{" +
                "questionId=" + questionId +
                ", givenGestureId=" + givenGestureId +
                ", isCorrect=" + isCorrect +
                "}\n";
    }
}
