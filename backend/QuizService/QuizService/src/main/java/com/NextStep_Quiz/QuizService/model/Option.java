package com.NextStep_Quiz.QuizService.model;

import jakarta.persistence.*;

@Entity
@Table(name = "`option`")
public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int optionID;

    private String option;
    private String field;

    @ManyToOne
    @JoinColumn(name = "questionID")
    private Question question;

    public Option() {
    }

    public Option(int optionID, String option, String field, Question question) {
        this.optionID = optionID;
        this.option = option;
        this.field = field;
        this.question = question;
    }

    public int getOptionID() {
        return optionID;
    }

    public void setOptionID(int optionID) {
        this.optionID = optionID;
    }

    public String getOption() {
        return option;
    }

    public void setOption(String option) {
        this.option = option;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

}
