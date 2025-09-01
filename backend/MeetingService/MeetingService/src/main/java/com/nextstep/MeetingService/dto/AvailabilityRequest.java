package com.nextstep.MeetingService.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AvailabilityRequest {
    private Long counsellorId;
    private String date; // e.g., "2024-02-20"
    private String start; // e.g., "09:00"
    private String end;   // e.g., "14:00"
    private int sessionLengthMinutes = 60; // default 1 hour

    public AvailabilityRequest() {
    }

    public AvailabilityRequest(Long counsellorId, String date, String start, String end, int sessionLengthMinutes) {
        this.counsellorId = counsellorId;
        this.date = date;
        this.start = start;
        this.end = end;
        this.sessionLengthMinutes = sessionLengthMinutes;
    }

    public Long getCounsellorId() {
        return counsellorId;
    }

    public void setCounsellorId(Long counsellorId) {
        this.counsellorId = counsellorId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public int getSessionLengthMinutes() {
        return sessionLengthMinutes;
    }

    public void setSessionLengthMinutes(int sessionLengthMinutes) {
        this.sessionLengthMinutes = sessionLengthMinutes;
    }
}
