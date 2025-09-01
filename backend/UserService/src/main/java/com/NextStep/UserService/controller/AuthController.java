package com.NextStep.UserService.controller;

import com.NextStep.UserService.dto.AuthResponse;
import com.NextStep.UserService.dto.LoginRequest;
import com.NextStep.UserService.dto.RegisterRequest;
import com.NextStep.UserService.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Student registration
    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    // Login
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
