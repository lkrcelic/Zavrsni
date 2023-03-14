package hr.hsgn.gestikulator.service;

import hr.hsgn.gestikulator.dto.UserAnswerRequest;
import hr.hsgn.gestikulator.entity.UserAnswer;

public interface UserAnswerService {

    UserAnswer giveAnswer(UserAnswerRequest userAnswerRequest);

}
