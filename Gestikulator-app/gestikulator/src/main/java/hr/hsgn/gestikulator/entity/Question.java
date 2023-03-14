package hr.hsgn.gestikulator.entity;

import javax.persistence.*;

@Entity
@Table(name="questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    private String questionType;
    private String text;

    @ManyToOne
    @JoinColumn(name="correct_gesture_id")
    private Gesture correctGesture;

    @ManyToOne
    @JoinColumn(name="wrong_gesture_id_1")
    private Gesture wrongGesture1;

    @ManyToOne
    @JoinColumn(name="wrong_gesture_id_2")
    private Gesture wrongGesture2;

    @ManyToOne
    @JoinColumn(name="wrong_gesture_id_3")
    private Gesture wrongGesture3;

    @ManyToOne
    @JoinColumn(name="sub_level_id")
    private SubLevel subLevel;

    public Question(Long questionId, String questionType, String text, Gesture correctGesture, Gesture wrongGesture1, Gesture wrongGesture2, Gesture wrongGesture3, SubLevel subLevel) {
        this.questionId = questionId;
        this.questionType = questionType;
        this.text = text;
        this.correctGesture = correctGesture;
        this.wrongGesture1 = wrongGesture1;
        this.wrongGesture2 = wrongGesture2;
        this.wrongGesture3 = wrongGesture3;
        this.subLevel = subLevel;
    }

    public Question() {
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Gesture getCorrectGesture() {
        return correctGesture;
    }

    public void setCorrectGesture(Gesture correctGesture) {
        this.correctGesture = correctGesture;
    }

    public Gesture getWrongGesture1() {
        return wrongGesture1;
    }

    public void setWrongGesture1(Gesture wrongGesture1) {
        this.wrongGesture1 = wrongGesture1;
    }

    public Gesture getWrongGesture2() {
        return wrongGesture2;
    }

    public void setWrongGesture2(Gesture wrongGesture2) {
        this.wrongGesture2 = wrongGesture2;
    }

    public Gesture getWrongGesture3() {
        return wrongGesture3;
    }

    public void setWrongGesture3(Gesture wrongGesture3) {
        this.wrongGesture3 = wrongGesture3;
    }

    public SubLevel getSubLevel() {
        return subLevel;
    }

    public void setSubLevel(SubLevel subLevel) {
        this.subLevel = subLevel;
    }
}
