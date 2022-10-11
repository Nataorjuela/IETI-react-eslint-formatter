package com.example.demo.service;

import com.example.demo.entities.Task;

import java.util.List;

public interface TaskService {
    public Task create( Task task );

    public Task findById( String id );

    public List<Task> getAll();

    public boolean deleteById( String id );

    public Task update( Task task, String id );
}
