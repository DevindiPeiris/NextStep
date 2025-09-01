package com.NextStep.UserService.controller;

import com.NextStep.UserService.dto.UserDTO;
import com.NextStep.UserService.entity.Role;
import com.NextStep.UserService.entity.User;
import com.NextStep.UserService.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1")
public class UserStudentController {

    private final UserRepository userRepository;

    public UserStudentController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @GetMapping("/counsellors")
    public List<UserDTO> getAllCounsellors() {
        return userRepository.findAll()
                .stream()
                .filter(u -> u.getRole() == Role.COUNSELLOR)
                .map(u -> new UserDTO(
                        u.getId(),
                        u.getUsername(),
                        u.getEmail(),
                        u.getRole()
                ))
                .collect(Collectors.toList());
    }
}