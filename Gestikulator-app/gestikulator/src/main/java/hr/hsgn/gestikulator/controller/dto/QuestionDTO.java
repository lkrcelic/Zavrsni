package hr.hsgn.gestikulator.controller.dto;

import hr.hsgn.gestikulator.entity.QuestionType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionDTO {

    private QuestionType questionType;

    private String text;

    private GestureDTO correctGesture;

    private GestureDTO wrongGesture1;

    private GestureDTO wrongGesture2;

    private GestureDTO wrongGesture3;

    private SubLevelDTO subLevel;

}
