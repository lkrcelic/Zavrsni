package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.entity.Question;
import hr.hsgn.gestikulator.entity.User;
import hr.hsgn.gestikulator.repository.QuestionRepository;
import hr.hsgn.gestikulator.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<Question> getQuestions(){
        return questionRepository.findAll();
    }

    // TODO: pass this random selection to SQL query
    public List<Question> getSubLevelQuestions(Long subLevelId) {
        List<Question> subLevelQuestions = questionRepository.getSubLevelQuestions(subLevelId); //questionRepository.findAll().stream().filter(q -> q.getSubLevel().getSubLevelId().equals(subLevelId)).toList();
        List<Question> randomList = new ArrayList<>();
        Random r = new Random();
        for(int i = 0; i < (int)Math.ceil(1.0 * subLevelQuestions.size() / 2) + 1; i++){
            Question nextQuestion = subLevelQuestions.get(r.nextInt(subLevelQuestions.size()));
            while(randomList.contains(nextQuestion)){
                nextQuestion = subLevelQuestions.get(r.nextInt(subLevelQuestions.size()));
            }
            randomList.add(nextQuestion);
        }
        return randomList;
    }

    @Override
    public Question findById(Long id) {
        Optional<Question> question = questionRepository.findById(id);

        return question.orElse(null);
    }
}
