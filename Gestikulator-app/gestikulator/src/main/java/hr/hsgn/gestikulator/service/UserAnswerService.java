package hr.hsgn.gestikulator.service;

import hr.hsgn.gestikulator.controller.request.UserAnswerRequest;
import hr.hsgn.gestikulator.entity.UserAnswer;

public interface UserAnswerService {

    UserAnswer giveAnswer(UserAnswerRequest userAnswerRequest);

}
