package com.ChatBot.ChatBotService.repository;

import com.ChatBot.ChatBotService.model.Career;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerRepo extends JpaRepository<Career, Integer> {
    Career findByCareerName(String CareerName);
}
