package hr.hsgn.gestikulator.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Activity {
    private Long activityId;
    private String text;

    public Activity() {
    }

    public Activity(Long activityId, String text) {
        this.activityId = activityId;
        this.text = text;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
