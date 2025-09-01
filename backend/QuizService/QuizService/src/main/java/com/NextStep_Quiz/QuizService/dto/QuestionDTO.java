package com.NextStep_Quiz.QuizService.dto;

import java.util.List;

public class QuestionDTO {
    private int questionID;
    private String question;
    private List<OptionDTO> options;

    public QuestionDTO() {}

    public QuestionDTO(int questionID, String question, List<OptionDTO> options) {
        this.questionID = questionID;
        this.question = question;
        this.options = options;
    }

    public int getQuestionID() {
        return questionID;
    }

    public void setQuestionID(int questionID) {
        this.questionID = questionID;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<OptionDTO> getOptions() {
        return options;
    }

    public void setOptions(List<OptionDTO> options) {
        this.options = options;
    }

}
