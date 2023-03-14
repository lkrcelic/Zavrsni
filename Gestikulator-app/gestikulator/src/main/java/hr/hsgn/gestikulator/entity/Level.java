package hr.hsgn.gestikulator.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="levels")
public class Level {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long levelId;
    private String name;

    @OneToMany
    @JoinColumn(name="level_id")
    List<SubLevel> subLevels;

    public Level(Long levelId, String name, List<SubLevel> subLevels) {
        this.levelId = levelId;
        this.name = name;
        this.subLevels = subLevels;
    }

    public Level() {
    }

    public Long getLevelId() {
        return levelId;
    }

    public void setLevelId(Long levelId) {
        this.levelId = levelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SubLevel> getSubLevels() {
        return subLevels;
    }

    public void setSubLevels(List<SubLevel> subLevels) {
        this.subLevels = subLevels;
    }
}
