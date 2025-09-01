package com.nextstep.MeetingService.controller;

import com.nextstep.MeetingService.dto.MeetingRequest;
import com.nextstep.MeetingService.dto.MeetingResponse;
import com.nextstep.MeetingService.entity.Meeting;
import com.nextstep.MeetingService.service.MeetingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/meetings")
public class MeetingController {
    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

        @PostMapping("/book")
    public ResponseEntity<MeetingResponse> bookMeeting(@RequestBody MeetingRequest request) {
        return ResponseEntity.ok(meetingService.bookMeeting(request));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Meeting>> getStudentMeetings(@PathVariable Long studentId) {
        return ResponseEntity.ok(meetingService.getMeetingsForStudent(studentId));
    }

    @GetMapping("/counsellor/{counsellorId}")
    public ResponseEntity<List<Meeting>> getCounsellorMeetings(@PathVariable Long counsellorId) {
        return ResponseEntity.ok(meetingService.getMeetingsForCounsellor(counsellorId));
    }
}