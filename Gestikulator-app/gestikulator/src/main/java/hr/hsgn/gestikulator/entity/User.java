package hr.hsgn.gestikulator.entity;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import java.sql.Blob;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table (name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String username;
    private String email;
    private String password;
    private Integer dayStreaks;
    private Timestamp dateLastSolved;
    private Integer experience;
    private Integer heartsRemaining;
    private Integer gestureCoins;
    private Date dob;
    // private Blob profilePicture;

    public User(Long userId, String username, String email, String password, Integer dayStreaks,
                Timestamp dateLastSolved, Integer experience, Integer heartsRemaining, Integer gestureCoins, Date dob) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.dayStreaks = dayStreaks;
        this.dateLastSolved = dateLastSolved;
        this.experience = experience;
        this.heartsRemaining = heartsRemaining;
        this.gestureCoins = gestureCoins;
        this.dob = dob;
    }

    public User() {
        this.experience = 0;
        this.dayStreaks = 0;
        this.heartsRemaining = 3;
        this.gestureCoins = 0;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getDayStreaks() {
        return dayStreaks;
    }

    public void setDayStreaks(Integer dayStreaks) {
        this.dayStreaks = dayStreaks;
    }

    public Timestamp getDateLastSolved() {
        return dateLastSolved;
    }

    public void setDateLastSolved(Timestamp dateLastSolved) {
        this.dateLastSolved = dateLastSolved;
    }

    public Integer getExperience() {
        return experience;
    }

    public void setExperience(Integer experience) {
        this.experience = experience;
    }

    public Integer getHeartsRemaining() {
        return heartsRemaining;
    }

    public void setHeartsRemaining(Integer heartsRemaining) { this.heartsRemaining = heartsRemaining; }

    public Integer getGestureCoins() {
        return gestureCoins;
    }

    public void setGestureCoins(Integer gestureCoins) { this.gestureCoins = gestureCoins; }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }
}
