package com.NextStep_Quiz.QuizService.dto;

public class OptionDTO {
    private int optionID;
    private String option;
    private String field;

    public OptionDTO() {}

    public OptionDTO(int optionID, String option, String field) {
        this.optionID = optionID;
        this.option = option;
        this.field = field;
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


}
