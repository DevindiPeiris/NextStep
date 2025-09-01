package com.NextStep_Quiz.QuizService.dto;

import java.util.Map;

public class AnswerSubmissionDTO {
    private Map<Long, Long> answers;

    public Map<Long, Long> getAnswers(){
        return answers;
    }

    public void setAnswers(Map<Long, Long> answers){
        this.answers=answers;
    }
}
