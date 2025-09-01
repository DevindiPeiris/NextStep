package com.nextstep.MeetingService.repository;

import com.nextstep.MeetingService.entity.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {
    List<Meeting> findByStudentId(Long studentId);
    List<Meeting> findByCounsellorId(Long counsellorId);
}