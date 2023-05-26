package hr.hsgn.gestikulator.service;

import java.util.List;

import hr.hsgn.gestikulator.controller.dto.QuestionDTO;
import hr.hsgn.gestikulator.entity.Question;

public interface QuestionService {

    List<Question> getQuestions();

    List<QuestionDTO> getSubLevelQuestions(Long subLevelId);

    Question findById(Long id);
}
