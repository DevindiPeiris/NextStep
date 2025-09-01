package com.nextstep.MeetingService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MeetingResponse {
    private Long meetingId;
    private String meetingUrl;
    private String status;

    public MeetingResponse(Long meetingId, String meetingUrl, String status) {
        this.meetingId = meetingId;
        this.meetingUrl = meetingUrl;
        this.status = status;
    }

    public Long getMeetingId() {
        return meetingId;
    }

    public void setMeetingId(Long meetingId) {
        this.meetingId = meetingId;
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