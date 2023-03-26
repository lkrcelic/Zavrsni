package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.dto.AnswerRequest;
import hr.hsgn.gestikulator.dto.LevelRequest;
import hr.hsgn.gestikulator.dto.MainStateRequest;
import hr.hsgn.gestikulator.dto.SubLevelSummaryRequest;
import hr.hsgn.gestikulator.dto.UserAnswerRequest;
import hr.hsgn.gestikulator.entity.Activity;
import hr.hsgn.gestikulator.entity.Challenge;
import hr.hsgn.gestikulator.entity.DailyTip;
import hr.hsgn.gestikulator.entity.Level;
import hr.hsgn.gestikulator.entity.Statistic;
import hr.hsgn.gestikulator.entity.SubLevel;
import hr.hsgn.gestikulator.entity.User;
import hr.hsgn.gestikulator.repository.DailyTipRepository;
import hr.hsgn.gestikulator.repository.LevelRepository;
import hr.hsgn.gestikulator.repository.StatisticRepository;
import hr.hsgn.gestikulator.repository.UserRepository;
import hr.hsgn.gestikulator.service.LevelService;
import hr.hsgn.gestikulator.service.UserAnswerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class LevelServiceImpl implements LevelService {

    private final UserAnswerService userAnswerService;
    private final UserRepository userRepository;
    private final LevelRepository levelRepository;
    private final StatisticRepository statisticRepository;
    private final DailyTipRepository dailyTipRepository;
    private final ModelMapper mapper;

    @Autowired
    public LevelServiceImpl(UserAnswerService userAnswerService, UserRepository userRepository,
        LevelRepository levelRepository, StatisticRepository statisticRepository, DailyTipRepository dailyTipRepository,
        ModelMapper mapper) {
        this.userAnswerService = userAnswerService;
        this.userRepository = userRepository;
        this.levelRepository = levelRepository;
        this.statisticRepository = statisticRepository;
        this.dailyTipRepository = dailyTipRepository;
        this.mapper = mapper;
    }

    @Override
    public List<Level> getLevels() {
        return levelRepository.findAll();
    }

    @Override
    public List<LevelRequest> getLevelsWithSolved(Long userId) {
        List<Level> levels = getLevels();
        List<LevelRequest> levelRequests = new ArrayList<>();

        for (Level level : levels) {
            List<Boolean> areSolved = new ArrayList<>();
            List<SubLevel> subLevels = sortSubLevels(level.getSubLevels());
            for (int j = 0; j < level.getSubLevels().size(); j++) {
                areSolved.add(getIsSolved(subLevels.get(j).getId(), userId));
            }
            level.setSubLevels(subLevels);
            levelRequests.add(new LevelRequest(level, areSolved));
        }
        return levelRequests;
    }

    @Override
    public void solveSubLevel(SubLevelSummaryRequest subLevelSummaryRequest) {
        long exp = 0L;
        for (AnswerRequest answerRequest : subLevelSummaryRequest.getAnswers()) {
            UserAnswerRequest userAnswerRequest = mapper.map(answerRequest, UserAnswerRequest.class);
            userAnswerRequest.setUserId(subLevelSummaryRequest.getUserId());
            userAnswerService.giveAnswer(userAnswerRequest);
            exp += answerRequest.getIsCorrect() ? 10 : 0;
        }
        Statistic statistic = new Statistic();
        statistic.setIsSolved(subLevelSummaryRequest.getIsFinished());
        statistic.setSubLevelId(subLevelSummaryRequest.getSubLevelId());
        statistic.setExperience(exp); //TODO: ADD THIS TO SubLevelSummary
        statistic.setUserId(subLevelSummaryRequest.getUserId());
        Timestamp currentTimeStamp = new Timestamp(System.currentTimeMillis());
        statistic.setTimestamp(currentTimeStamp); //TODO: this should be sent by frontend as well
        statisticRepository.save(statistic);
        User user = userRepository.findById(subLevelSummaryRequest.getUserId()).orElse(null);
        if (user.getDateLastSolved() == null) {
            user.setDayStreaks(1);
        } else if (!new Date(user.getDateLastSolved().getTime()).equals(new Date(currentTimeStamp.getTime()))) {
            user.setDayStreaks(user.getDayStreaks() + 1);
        }
        user.setDateLastSolved(currentTimeStamp);
        userRepository.save(user);
    }

    //TODO: this is a mock function that handles main state, you have to:
    //TODO: A)add daily tip support
    //TODO: B)add challenge and activity support
    @Override
    public MainStateRequest getMainState(Long userId) {
        LocalDate currentDate = LocalDate.now();
        return new MainStateRequest(userRepository.findById(userId)
            .orElseThrow(() -> new IllegalStateException("User with this ID does not exist!!!")),
            getLevelsWithSolved(userId),
            Arrays.asList(new Challenge(1L, "Riješi 5 podrazina.", Boolean.FALSE),
                new Challenge(2L, "Riješi 1 razinu.", Boolean.FALSE),
                new Challenge(3L, "Dodaj sliku na profil.", Boolean.TRUE)),
            Arrays.asList(new Activity(1L, "Otvorio si prvu podrazinu."),
                new Activity(2L, "Korisnik 'Guido' je završio prvu razinu.")),
            dailyTipRepository.findById((long) (currentDate.getDayOfYear() % 3 + 1))
                .orElse(new DailyTip(1L, "Ovo je lažni daily tip")));
    }

    private Boolean getIsSolved(Long subLevelId, Long userId) {
        Boolean isSolved = statisticRepository.getIsSolved(subLevelId, userId);
        return isSolved == null ? Boolean.FALSE : isSolved;
    }

    private List<SubLevel> sortSubLevels(List<SubLevel> subLevels) {
        if (subLevels.size() == 0) {
            return subLevels;
        }
        List<SubLevel> sortedSubLevels = new ArrayList<>();
        SubLevel subLevel = subLevels.stream().filter(s -> s.getPrevious_id() == null).findFirst().orElseThrow(
            () -> new IllegalStateException(
                "There is no starting sub level, please check database for solution to this error."));
        sortedSubLevels.add(subLevel);
        while (sortedSubLevels.size() != subLevels.size()) {
            Long previous_id = subLevel.getId();
            subLevel = subLevels.stream().filter(s -> s.getPrevious_id().equals(previous_id)).findFirst().orElseThrow(
                () -> new IllegalStateException(
                    "There is no next sub level, please check database for solution to this error."));
            sortedSubLevels.add(subLevel);
        }
        return sortedSubLevels;
    }

}
