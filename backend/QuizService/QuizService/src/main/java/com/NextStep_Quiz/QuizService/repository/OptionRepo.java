package com.NextStep_Quiz.QuizService.repository;

import com.NextStep_Quiz.QuizService.model.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionRepo extends JpaRepository<Option, Integer> {
}
