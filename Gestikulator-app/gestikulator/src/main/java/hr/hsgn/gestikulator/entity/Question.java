package hr.hsgn.gestikulator.entity;

import javax.persistence.*;

@Entity
@Table(name="question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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

}
