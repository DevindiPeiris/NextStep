package com.NextStep_Quiz.QuizService.controller;

import com.NextStep_Quiz.QuizService.dto.AnswerSubmissionDTO;
import com.NextStep_Quiz.QuizService.dto.QuestionDTO;
import com.NextStep_Quiz.QuizService.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/quiz")
@CrossOrigin
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    @GetMapping("/questions")
    public ResponseEntity<List<QuestionDTO>> getQuestions() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }

    @PostMapping("/submit")
    public ResponseEntity<Map<String, Integer>> submitAnswers(@RequestBody Map<Long, Long> answers) {
        Map<String, Integer> result = questionService.processAnswers(answers);
        return ResponseEntity.ok(result);
    }





}
