package com.nextstep.MeetingService.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
public class CounsellorProfile {
    @Id
    private Long counsellorId;

    private String fullName;

    @Column(length = 2000)
    private String description;

    public CounsellorProfile() {}

    public CounsellorProfile(Long counsellorId, String fullName, String description) {
        this.counsellorId = counsellorId;
        this.fullName = fullName;
        this.description = description;
    }

    public Long getCounsellorId() {
        return counsellorId;
    }

    public void setCounsellorId(Long counsellorId) {
        this.counsellorId = counsellorId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
