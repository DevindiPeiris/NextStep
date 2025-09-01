package com.NextStep_Quiz.QuizService.repository;

import com.NextStep_Quiz.QuizService.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepo extends JpaRepository<Question, Integer> {
}
