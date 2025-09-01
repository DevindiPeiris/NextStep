package com.ChatBot.ChatBotService.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fieldid")
    private int id;

    @Column(name = "fieldname")
    private String fieldName;

    @ManyToMany(mappedBy = "fields")
    private List<Career> careers;

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public List<Career> getCareers() {
        return careers;
    }

    public void setCareers(List<Career> careers) {
        this.careers = careers;
    }
}
