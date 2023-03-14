package hr.hsgn.gestikulator.entity;

import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name="sub_levels")
public class SubLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subLevelId;
    private String name;
    @Column(name="level_id")
    private Long levelId;

    @Column(name="previous_id")
    @Nullable
    private Long previous_id;

    public SubLevel(Long subLevelId, String name, Long levelId, @Nullable Long previous_id) {
        this.subLevelId = subLevelId;
        this.name = name;
        this.previous_id = previous_id;
        this.levelId = levelId;
    }

    public SubLevel() {
    }

    public Long getSubLevelId() {
        return subLevelId;
    }

    public void setSubLevelId(Long subLevelId) {
        this.subLevelId = subLevelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Nullable
    public Long getPrevious_id() {
        return previous_id;
    }

    public void setPrevious_id(@Nullable Long previous_id) {
        this.previous_id = previous_id;
    }

    public Long getLevelId() {
        return levelId;
    }

    public void setLevelId(Long levelId) {
        this.levelId = levelId;
    }
}
