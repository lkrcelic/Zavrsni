package hr.hsgn.gestikulator.entity;

import lombok.Getter;
import lombok.Setter;
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

@Getter
@Setter
@Entity
@Table (name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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

}
