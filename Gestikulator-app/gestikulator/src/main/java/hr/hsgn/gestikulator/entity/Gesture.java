package hr.hsgn.gestikulator.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="gestures")
public class Gesture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gestureId;
    private String text;
    private String uri;
    private String description;

    public Gesture() {
    }

    public Gesture(Long gestureId, String text, String uri, String description) {
        this.gestureId = gestureId;
        this.text = text;
        this.uri = uri;
        this.description = description;
    }

    public Long getGestureId() {
        return gestureId;
    }

    public void setGestureId(Long gestureId) {
        this.gestureId = gestureId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
