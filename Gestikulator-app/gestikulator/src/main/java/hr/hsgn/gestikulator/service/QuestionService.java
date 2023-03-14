package hr.hsgn.gestikulator.service;

import java.util.List;

import hr.hsgn.gestikulator.entity.Question;

public interface QuestionService {

    List<Question> getQuestions();

    List<Question> getSubLevelQuestions(Long subLevelId);

    Question findById(Long id);
}
