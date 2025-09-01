package com.NextStep.UserService.controller;

import com.NextStep.UserService.dto.RegisterRequest;
import com.NextStep.UserService.dto.UserDTO;
import com.NextStep.UserService.entity.Role;
import com.NextStep.UserService.entity.User;
import com.NextStep.UserService.service.AuthService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/users")
public class UserAdminController {

    private final AuthService authService;

    public UserAdminController(AuthService authService) {
        this.authService = authService;
    }

    // ✅ Get all users (safe DTO, no passwords)
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserDTO> getAllUsers() {
        return authService.getAllUsers();
    }

    // ✅ Add new user (only counsellor or admin allowed)
    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public User addUser(@RequestBody RegisterRequest request,
                        @RequestParam String role) {
        Role selectedRole = Role.valueOf(role.toUpperCase());
        if (selectedRole == Role.STUDENT) {
            throw new RuntimeException("Admins cannot create students");
        }
        return authService.createUserWithRole(request, selectedRole);
    }

    // ✅ Update user
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public User updateUser(@PathVariable Long id,
                           @RequestBody RegisterRequest request,
                           @RequestParam(required = false) String role) {
        Role selectedRole = (role != null) ? Role.valueOf(role.toUpperCase()) : null;
        return authService.updateUser(id, request, selectedRole);
    }

    // ✅ Delete user
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(@PathVariable Long id) {
        authService.deleteUser(id);
    }
}