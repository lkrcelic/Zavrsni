package hr.hsgn.gestikulator.controller;

import hr.hsgn.gestikulator.controller.request.UserAnswerRequest;
import hr.hsgn.gestikulator.entity.UserAnswer;
import hr.hsgn.gestikulator.service.UserAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("useranswers")
public class AnswerController {

    private final UserAnswerService userAnswerService;

    @Autowired
    public AnswerController(UserAnswerService userAnswerService) {
        this.userAnswerService = userAnswerService;
    }

    @PostMapping("give")
    public UserAnswer giveAnswer (@RequestBody UserAnswerRequest userAnswerRequest) {
        return userAnswerService.giveAnswer(userAnswerRequest);
    }
}
