package com.ChatBot.ChatBotService.controller;

import com.ChatBot.ChatBotService.model.Career;
import com.ChatBot.ChatBotService.service.ChatBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/chatbot")
public class ChatBotController {
    @Autowired
    private ChatBotService chatbotService;

    @GetMapping("/fields")
    public List<String> getFieldOptions() {
        return chatbotService.getAllFieldNames();
    }

    @PostMapping("/recommend")
    public List<String> getCareerRecommendations(@RequestBody Map<String, String> body) {
        String field1 = body.get("field1");
        String field2 = body.get("field2");
        String preferred = body.get("preferred");
        return chatbotService.getRecommendedCareerNames(field1, field2, preferred);
    }

    @GetMapping("/career-details")
    public Map<String, String> getCareerDetails(@RequestParam String name) {
        Optional<Career> career = chatbotService.getCareerDetails(name);
        if (career.isPresent()) {
            Career c = career.get();
            Map<String, String> details = new LinkedHashMap<>();
            details.put("Name", c.getCareerName());
            details.put("Description", c.getDescription());
            details.put("Skills", c.getSkills());
            details.put("Education", c.getEducation());
            return details;
        } else {
            return Map.of("message", "Career not found");
        }
    }
}
