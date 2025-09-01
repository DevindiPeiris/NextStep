package com.NextStep_Quiz.QuizService.service;

import com.NextStep_Quiz.QuizService.dto.OptionDTO;
import com.NextStep_Quiz.QuizService.dto.QuestionDTO;
import com.NextStep_Quiz.QuizService.model.Option;
import com.NextStep_Quiz.QuizService.model.Question;
import com.NextStep_Quiz.QuizService.repository.OptionRepo;
import com.NextStep_Quiz.QuizService.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepo questionRepo;

    @Autowired
    private OptionRepo optionRepo;

    public List<QuestionDTO> getAllQuestions() {
        List<Question> questions = questionRepo.findAll();
        List<QuestionDTO> dtoList = new ArrayList<>();

        for (Question q : questions) {
            List<OptionDTO> optionDTOs = new ArrayList<>();
            for (Option o : q.getOptions()) {
                optionDTOs.add(new OptionDTO(o.getOptionID(), o.getOption(), o.getField()));
            }

            dtoList.add(new QuestionDTO(q.getQuestionID(), q.getQuestion(), optionDTOs));
        }

        return dtoList;
    }

    public Map<String, Integer> processAnswers(Map<Long, Long> answers) {
        Map<String, Integer> fieldScores = new HashMap<>();

        for (Map.Entry<Long, Long> entry : answers.entrySet()) {
            Long optionId = entry.getValue();
            Option option = optionRepo.findById(optionId.intValue()).orElse(null);
            if (option != null) {
                String field = option.getField();
                fieldScores.put(field, fieldScores.getOrDefault(field, 0) + 1);
            }
        }

        return fieldScores;
    }


}
