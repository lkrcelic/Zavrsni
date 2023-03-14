package hr.hsgn.gestikulator.dto;

import hr.hsgn.gestikulator.entity.Activity;
import hr.hsgn.gestikulator.entity.Challenge;
import hr.hsgn.gestikulator.entity.DailyTip;
import hr.hsgn.gestikulator.entity.User;

import java.util.List;

public class MainStateRequest {
    private User currentUser;
    private List<LevelRequest> levels;
    private List<Challenge> challenges;
    private List<Activity> activities;
    private DailyTip dailyTip;

    public MainStateRequest() {
    }

    public MainStateRequest(User currentUser, List<LevelRequest> levels, List<Challenge> challenges, List<Activity> activities, DailyTip dailyTip) {
        this.currentUser = currentUser;
        this.levels = levels;
        this.challenges = challenges;
        this.activities = activities;
        this.dailyTip = dailyTip;
    }

    public User getCurrentUser() {
        return currentUser;
    }

    public void setCurrentUser(User currentUser) {
        this.currentUser = currentUser;
    }

    public List<LevelRequest> getLevels() {
        return levels;
    }

    public void setLevels(List<LevelRequest> levels) {
        this.levels = levels;
    }

    public List<Challenge> getChallenges() {
        return challenges;
    }

    public void setChallenges(List<Challenge> challenges) {
        this.challenges = challenges;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }

    public DailyTip getDailyTip() {
        return dailyTip;
    }

    public void setDailyTip(DailyTip dailyTip) {
        this.dailyTip = dailyTip;
    }
}
