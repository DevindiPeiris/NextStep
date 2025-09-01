package com.nextstep.MeetingService.controller;

import com.nextstep.MeetingService.dto.AvailabilityRequest;
import com.nextstep.MeetingService.entity.CounsellorAvailability;
import com.nextstep.MeetingService.repository.AvailabilityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/availability")
public class AvailabilityController {

    private final AvailabilityRepository availabilityRepository;

    public AvailabilityController(AvailabilityRepository availabilityRepository) {
        this.availabilityRepository = availabilityRepository;
    }

    
    @PostMapping("/generate")
    public ResponseEntity<List<CounsellorAvailability>> generateDaySlots(
            @RequestBody AvailabilityRequest request) {

        LocalDate targetDate = LocalDate.parse(request.getDate());
        LocalTime startTime = LocalTime.parse(request.getStart()); 
        LocalTime endTime = LocalTime.parse(request.getEnd());     
        int duration = request.getSessionLengthMinutes() > 0 ? request.getSessionLengthMinutes() : 60;

        List<CounsellorAvailability> slots = new ArrayList<>();

        LocalTime current = startTime;
        while (current.plusMinutes(duration).compareTo(endTime) <= 0) {
            LocalDateTime slotStart = LocalDateTime.of(targetDate, current);
            LocalDateTime slotEnd = slotStart.plusMinutes(duration);

            CounsellorAvailability avail = new CounsellorAvailability(
                    null, request.getCounsellorId(), slotStart, slotEnd, false
            );

            slots.add(avail);
            current = slotEnd.toLocalTime();
        }

        return ResponseEntity.ok(availabilityRepository.saveAll(slots));
    }

    
    @GetMapping("/{counsellorId}")
    public ResponseEntity<List<CounsellorAvailability>> getAvailability(@PathVariable Long counsellorId) {
        return ResponseEntity.ok(availabilityRepository.findByCounsellorIdAndBookedFalse(counsellorId));
    }
}