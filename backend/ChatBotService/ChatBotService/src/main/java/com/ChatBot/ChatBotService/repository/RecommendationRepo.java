package com.ChatBot.ChatBotService.repository;

import com.ChatBot.ChatBotService.model.Field;
import com.ChatBot.ChatBotService.model.RecommendationMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecommendationRepo extends JpaRepository<RecommendationMap, Integer> {
    Optional<RecommendationMap> findByField1AndField2AndMostPreferredField(Field field1, Field field2, Field mostPreferredField);
}
