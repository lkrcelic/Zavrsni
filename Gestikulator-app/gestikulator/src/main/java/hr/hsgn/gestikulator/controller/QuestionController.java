package hr.hsgn.gestikulator.controller;

import hr.hsgn.gestikulator.entity.Question;
import hr.hsgn.gestikulator.service.impl.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "questions")
public class QuestionController {

    private final QuestionServiceImpl questionService;

    @Autowired
    public QuestionController(QuestionServiceImpl questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public List<Question> getQuestions(){ return questionService.getQuestions(); }

    @GetMapping(value="/subLevel/{id}")
    public List<Question> getSubLevelQuestions(@PathVariable("id") Long id){ return questionService.getSubLevelQuestions(id); }
}
