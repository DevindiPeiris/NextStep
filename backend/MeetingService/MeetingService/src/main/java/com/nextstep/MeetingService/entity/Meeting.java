package com.nextstep.MeetingService.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Data
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long studentId;
    private Long counsellorId;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private String meetingUrl;
    private String status; // SCHEDULED, COMPLETED, CANCELLED

    public Meeting() {
    }

    public Meeting(Long id, Long studentId, Long counsellorId, LocalDateTime startTime, LocalDateTime endTime, String meetingUrl, String status) {
        this.id = id;
        this.studentId = studentId;
        this.counsellorId = counsellorId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetingUrl = meetingUrl;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getCounsellorId() {
        return counsellorId;
    }

    public void setCounsellorId(Long counsellorId) {
        this.counsellorId = counsellorId;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public String getMeetingUrl() {
        return meetingUrl;
    }

    public void setMeetingUrl(String meetingUrl) {
        this.meetingUrl = meetingUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
