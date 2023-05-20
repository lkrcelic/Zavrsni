package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.controller.request.UserAnswerRequest;
import hr.hsgn.gestikulator.entity.Gesture;
import hr.hsgn.gestikulator.entity.Question;
import hr.hsgn.gestikulator.entity.User;
import hr.hsgn.gestikulator.entity.UserAnswer;
import hr.hsgn.gestikulator.repository.UserAnswersRepository;
import hr.hsgn.gestikulator.repository.UserRepository;
import hr.hsgn.gestikulator.service.GestureService;
import hr.hsgn.gestikulator.service.QuestionService;
import hr.hsgn.gestikulator.service.UserAnswerService;
import hr.hsgn.gestikulator.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class UserAnswerSeviceImpl implements UserAnswerService {

    private final UserAnswersRepository userAnswersRepository;

    private final UserRepository userRepository;

    private final UserService userService;

    private final QuestionService questionService;

    private final GestureService gestureService;

    private final ModelMapper mapper;

    @Autowired
    public UserAnswerSeviceImpl(UserAnswersRepository userAnswersRepository, UserRepository userRepository,
        UserService userService, QuestionService questionService, GestureService gestureService, ModelMapper mapper) {
        this.userAnswersRepository = userAnswersRepository;
        this.userRepository = userRepository;
        this.userService = userService;
        this.questionService = questionService;
        this.gestureService = gestureService;
        this.mapper = mapper;
    }

    @Override
    public UserAnswer giveAnswer(UserAnswerRequest userAnswerRequest) {
        UserAnswer userAnswer = mapper.map(userAnswerRequest, UserAnswer.class);
        User user = userService.findById(userAnswerRequest.getUserId());
        Question question = questionService.findById(userAnswerRequest.getQuestionId());
        Gesture gesture = gestureService.findById(userAnswerRequest.getGivenGestureId());

        if (user != null) {
            userAnswer.setUser(user);

            if (user.getHeartsRemaining() == 0) {
                throw new EntityNotFoundException("Igra je gotova. Potrošeni su svi životi.");
            }

            if (userAnswerRequest.getIsCorrect()) {
                user.setExperience(user.getExperience() + 10);
            } else {
                user.setHeartsRemaining(user.getHeartsRemaining() - 1);
            }
            userRepository.save(user);
        }

        if (question != null) {
            userAnswer.setQuestion(question);
        }

        if (gesture != null) {
            userAnswer.setGivenGesture(gesture);
        }

        return userAnswersRepository.save(userAnswer);
    }

}
