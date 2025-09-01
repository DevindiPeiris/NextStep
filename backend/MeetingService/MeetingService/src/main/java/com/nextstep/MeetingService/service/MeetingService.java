package com.nextstep.MeetingService.service;

import com.nextstep.MeetingService.dto.MeetingRequest;
import com.nextstep.MeetingService.dto.MeetingResponse;
import com.nextstep.MeetingService.entity.CounsellorAvailability;
import com.nextstep.MeetingService.entity.Meeting;
import com.nextstep.MeetingService.repository.AvailabilityRepository;
import com.nextstep.MeetingService.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MeetingService {
    private final MeetingRepository meetingRepository;
    private final AvailabilityRepository availabilityRepository;

    @Autowired
    public MeetingService(MeetingRepository meetingRepository,
                          AvailabilityRepository availabilityRepository) {
        this.meetingRepository = meetingRepository;
        this.availabilityRepository = availabilityRepository;
    }

    public MeetingResponse bookMeeting(MeetingRequest request) {
        CounsellorAvailability slot;

        if (request.getSlotId() != null) {
            // ✅ Stripe webhook booking
            slot = availabilityRepository.findById(request.getSlotId())
                    .orElseThrow(() -> new RuntimeException("Slot not found"));
        } else {
            // ✅ Legacy/manual API booking
            slot = availabilityRepository
                    .findByCounsellorIdAndStartTimeAndEndTimeAndBookedFalse(
                            request.getCounsellorId(),
                            request.getStartTime(),
                            request.getEndTime()
                    )
                    .orElseThrow(() -> new RuntimeException("Requested slot not available"));
        }

        if (slot.isBooked()) {
            throw new RuntimeException("Requested slot already booked");
        }

        // Mark as booked
        slot.setBooked(true);
        availabilityRepository.save(slot);

        // Generate Jitsi URL
        String meetingUrl = "https://meet.jit.si/" + UUID.randomUUID();

        // Save new meeting
        Meeting meeting = new Meeting(
                null,
                request.getStudentId(),
                request.getCounsellorId(),
                slot.getStartTime(),
                slot.getEndTime(),
                meetingUrl,
                "SCHEDULED"
        );
        Meeting saved = meetingRepository.save(meeting);

        System.out.println("✅ Meeting saved: " + saved);

        return new MeetingResponse(saved.getId(), meetingUrl, saved.getStatus());
    }

    public List<Meeting> getMeetingsForStudent(Long studentId) {
        return meetingRepository.findByStudentId(studentId);
    }

    public List<Meeting> getMeetingsForCounsellor(Long counsellorId) {
        return meetingRepository.findByCounsellorId(counsellorId);
    }
}