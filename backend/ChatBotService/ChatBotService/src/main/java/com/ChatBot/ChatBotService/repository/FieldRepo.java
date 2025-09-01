package com.ChatBot.ChatBotService.repository;

import com.ChatBot.ChatBotService.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldRepo extends JpaRepository<Field,Integer> {
    Field findByFieldName(String fieldName);
}
