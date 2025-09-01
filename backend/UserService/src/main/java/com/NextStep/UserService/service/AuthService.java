package com.NextStep.UserService.service;

import com.NextStep.UserService.dto.AuthResponse;
import com.NextStep.UserService.dto.LoginRequest;
import com.NextStep.UserService.dto.RegisterRequest;
import com.NextStep.UserService.dto.UserDTO;
import com.NextStep.UserService.entity.Role;
import com.NextStep.UserService.entity.User;
import com.NextStep.UserService.repository.UserRepository;
import com.NextStep.UserService.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    // 1. Register student
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.STUDENT); // only students can self-register

        userRepository.save(user);

        String token = jwtService.generateToken(user.getId(), user.getUsername(), user.getRole().name());
        return new AuthResponse(token, user.getRole().name(), user.getId());
    }

    // 2. Login
    // 2. Login
    public AuthResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid username or password");
        }

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // ✅ include userId when generating the token
        String token = jwtService.generateToken(user.getId(), user.getUsername(), user.getRole().name());

        // ✅ return userId in AuthResponse
        return new AuthResponse(token, user.getRole().name(), user.getId());
    }

    // 3. Admin creates user (counsellor/admin only)
    public User createUserWithRole(RegisterRequest request, Role role) {
        if (role == Role.STUDENT) {
            throw new RuntimeException("Students must self-register.");
        }

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(role);

        return userRepository.save(user);
    }

    // 4. List all users (safe DTO, no passwords)
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(u -> new UserDTO(
                        u.getId(),
                        u.getUsername(),
                        u.getEmail(),
                        u.getRole()
                ))
                .collect(Collectors.toList());
    }

    // 5. Update user (except students’ role)
    public User updateUser(Long id, RegisterRequest request, Role role) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        if (request.getPassword() != null && !request.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }

        if (role != null && role != Role.STUDENT) {
            user.setRole(role);
        }

        return userRepository.save(user);
    }

    // 6. Delete user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
