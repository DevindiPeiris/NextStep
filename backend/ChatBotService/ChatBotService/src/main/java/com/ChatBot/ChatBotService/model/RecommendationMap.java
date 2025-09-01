package com.ChatBot.ChatBotService.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class RecommendationMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "recommendationid")
    private int RecommendationID;

    @ManyToOne
    @JoinColumn(name = "field1_id")
    private Field field1;

    @ManyToOne
    @JoinColumn(name = "field2_id")
    private Field field2;

    @ManyToOne
    @JoinColumn(name = "most_preferred_field_id")
    private Field mostPreferredField;

    @ManyToMany
    @JoinTable(
            name = "recommendation_careers",
            joinColumns = @JoinColumn(name = "recommendation_id"),
            inverseJoinColumns = @JoinColumn(name = "career_id")
    )
    private List<Career> careerList;

    public int getRecommendationID() {
        return RecommendationID;
    }

    public void setRecommendationID(int recommendationID) {
        RecommendationID = recommendationID;
    }

    public Field getField1() {
        return field1;
    }

    public void setField1(Field field1) {
        this.field1 = field1;
    }

    public Field getField2() {
        return field2;
    }

    public void setField2(Field field2) {
        this.field2 = field2;
    }

    public Field getMostPreferredField() {
        return mostPreferredField;
    }

    public void setMostPreferredField(Field mostPreferredField) {
        this.mostPreferredField = mostPreferredField;
    }

    public List<Career> getCareerList() {
        return careerList;
    }

    public void setCareerList(List<Career> careerList) {
        this.careerList = careerList;
    }
}
