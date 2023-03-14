package hr.hsgn.gestikulator.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//TODO: add annotations for database, as this should be an entity
public class Challenge {
    private Long challengeId;
    private String text;
    private Boolean isComplete;

    public Challenge() {
    }

    public Challenge(Long challengeId, String text, Boolean isComplete) {
        this.challengeId = challengeId;
        this.text = text;
        this.isComplete = isComplete;
    }

    public Long getChallengeId() {
        return challengeId;
    }

    public void setChallengeId(Long challengeId) {
        this.challengeId = challengeId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getComplete() {
        return isComplete;
    }

    public void setComplete(Boolean complete) {
        isComplete = complete;
    }
}
