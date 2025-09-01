package com.ChatBot.ChatBotService.service;

import com.ChatBot.ChatBotService.model.Career;
import com.ChatBot.ChatBotService.model.Field;
import com.ChatBot.ChatBotService.model.RecommendationMap;
import com.ChatBot.ChatBotService.repository.CareerRepo;
import com.ChatBot.ChatBotService.repository.FieldRepo;
import com.ChatBot.ChatBotService.repository.RecommendationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.Optional;

@Service
public class ChatBotService {
    @Autowired
    private FieldRepo fieldRepo;

    @Autowired
    private CareerRepo careerRepo;

    @Autowired
    private RecommendationRepo recommendationMapRepo;

    public List<String> getAllFieldNames() {
        return fieldRepo.findAll().stream().map(Field::getFieldName).toList();
    }

    public List<String> getRecommendedCareerNames(String field1Name, String field2Name, String mostPreferredFieldName) {
        Field field1 = fieldRepo.findByFieldName(field1Name);
        Field field2 = fieldRepo.findByFieldName(field2Name);
        Field mostPreferred = fieldRepo.findByFieldName(mostPreferredFieldName);

        Optional<RecommendationMap> mapOpt = recommendationMapRepo.findByField1AndField2AndMostPreferredField(field1, field2, mostPreferred);
        if (mapOpt.isEmpty()) {
            mapOpt = recommendationMapRepo.findByField1AndField2AndMostPreferredField(field2, field1, mostPreferred);
        }

        return mapOpt.map(map -> map.getCareerList().stream().map(Career::getCareerName).toList())
                .orElse(List.of("No recommendations found for this combination."));
    }

    public Optional<Career> getCareerDetails(String careerName) {
        return Optional.ofNullable(careerRepo.findByCareerName(careerName));
    }
}
