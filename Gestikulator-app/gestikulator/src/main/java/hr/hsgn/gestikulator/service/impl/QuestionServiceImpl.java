package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.controller.dto.QuestionDTO;
import hr.hsgn.gestikulator.entity.Question;
import hr.hsgn.gestikulator.entity.QuestionType;
import hr.hsgn.gestikulator.repository.QuestionRepository;
import hr.hsgn.gestikulator.service.QuestionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    private final ModelMapper modelMapper;

    @Autowired
    public QuestionServiceImpl(QuestionRepository questionRepository, ModelMapper modelMapper) {
        this.questionRepository = questionRepository;
        this.modelMapper = modelMapper;
    }

    public List<Question> getQuestions() {
        return questionRepository.findAll();
    }

    public List<QuestionDTO> getSubLevelQuestions(Long subLevelId) {
        List<Question> subLevelGuessPhraseQuestions =
            questionRepository.getTwoRandomQuestionsBySubLevelIdAndQuestionType(subLevelId, QuestionType.GUESS_PHRASE.name());
        List<Question> subLevelGuessGestureQuestions =
            questionRepository.getTwoRandomQuestionsBySubLevelIdAndQuestionType(subLevelId, QuestionType.GUESS_GESTURE.name());
        List<Question> randomQuestionList = new ArrayList<>();

        randomQuestionList.addAll(subLevelGuessPhraseQuestions);
        randomQuestionList.addAll(subLevelGuessGestureQuestions);

        return randomQuestionList.stream().map(question -> modelMapper.map(question, QuestionDTO.class))
            .collect(Collectors.toList());
    }

    @Override
    public Question findById(Long id) {
        Optional<Question> question = questionRepository.findById(id);

        return question.orElse(null);
    }

}
