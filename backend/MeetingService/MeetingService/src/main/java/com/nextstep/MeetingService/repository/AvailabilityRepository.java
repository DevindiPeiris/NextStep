package com.nextstep.MeetingService.repository;

import com.nextstep.MeetingService.entity.CounsellorAvailability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface AvailabilityRepository extends JpaRepository<CounsellorAvailability, Long> {
    List<CounsellorAvailability> findByCounsellorIdAndBookedFalse(Long counsellorId);

    Optional<CounsellorAvailability> findByCounsellorIdAndStartTimeAndEndTimeAndBookedFalse(
            Long counsellorId,
            LocalDateTime startTime,
            LocalDateTime endTime
    );
}