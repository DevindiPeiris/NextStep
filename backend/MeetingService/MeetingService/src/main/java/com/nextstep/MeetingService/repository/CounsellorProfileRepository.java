package com.nextstep.MeetingService.repository;

import com.nextstep.MeetingService.entity.CounsellorProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounsellorProfileRepository extends JpaRepository<CounsellorProfile, Long> {
    // counsellorId is the PK, so basic JpaRepository covers findById, save, etc.
}
