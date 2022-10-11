package com.example.demo.entities;

import com.example.demo.dto.TaskDTO;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;


@Document
public class Task {
    @Id
    private String id;
    private String name;
    private String description;
    private String status;
    private String assignedTo;
    private String dueDate;
    private String createdAt;

    public Task() {
    }

    public Task(TaskDTO taskDto,String id) {
        this.id = id;
        this.name=taskDto.getName();
        this.description=taskDto.getDescription();
        this.status=taskDto.getStatus();
        this.assignedTo=taskDto.getAssignedTo();
        this.dueDate=taskDto.getDueDate();
        this.createdAt=taskDto.getCreatedAt();
    }

    public Task(TaskDTO taskDto) {
        this.id= UUID.randomUUID().toString();
        this.name=taskDto.getName();
        this.description=taskDto.getDescription();
        this.status=taskDto.getStatus();
        this.assignedTo=taskDto.getAssignedTo();
        this.dueDate=taskDto.getDueDate();
        this.createdAt=taskDto.getCreatedAt();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
