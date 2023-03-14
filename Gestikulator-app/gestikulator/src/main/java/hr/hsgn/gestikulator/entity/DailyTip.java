package hr.hsgn.gestikulator.entity;

import javax.persistence.*;

@Entity
@Table(name="daily_tips")
public class DailyTip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dailyTipId;
    private String text;

    public DailyTip() {
    }

    public DailyTip(Long dailyTipId, String text) {
        this.dailyTipId = dailyTipId;
        this.text = text;
    }

    public Long getDailyTipId() {
        return dailyTipId;
    }

    public void setDailyTipId(Long dailyTipId) {
        this.dailyTipId = dailyTipId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
