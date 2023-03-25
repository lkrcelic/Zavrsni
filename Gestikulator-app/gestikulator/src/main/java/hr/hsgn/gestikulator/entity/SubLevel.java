package hr.hsgn.gestikulator.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="sub_level")
public class SubLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name="level_id")
    private Long levelId;

    @Column(name="previous_id")
    @Nullable
    private Long previous_id;

}
