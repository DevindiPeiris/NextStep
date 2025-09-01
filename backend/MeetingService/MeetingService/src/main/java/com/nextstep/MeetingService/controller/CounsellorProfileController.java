package com.nextstep.MeetingService.controller;

import com.nextstep.MeetingService.entity.CounsellorProfile;
import com.nextstep.MeetingService.repository.CounsellorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/profile")
public class CounsellorProfileController {

    private final CounsellorProfileRepository profileRepository;

    public CounsellorProfileController(CounsellorProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    // Counsellor creates or updates their profile AFTER they log in
    @PostMapping("/{counsellorId}")
    public ResponseEntity<CounsellorProfile> saveProfile(
            @PathVariable Long counsellorId,
            @RequestBody CounsellorProfile profile) {

        profile.setCounsellorId(counsellorId); // enforce correct link back to UserService
        return ResponseEntity.ok(profileRepository.save(profile));
    }

    // Students fetch counsellor profile when browsing
    @GetMapping("/{counsellorId}")
    public ResponseEntity<CounsellorProfile> getProfile(@PathVariable Long counsellorId) {
        return profileRepository.findById(counsellorId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
