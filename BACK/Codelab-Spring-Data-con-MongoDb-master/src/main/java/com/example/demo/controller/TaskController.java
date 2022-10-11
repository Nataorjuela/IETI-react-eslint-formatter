package com.example.demo.controller;

import com.example.demo.dto.TaskDTO;
import com.example.demo.entities.Task;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/task")
public class TaskController {
    @Autowired
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public ResponseEntity<Task> create(@RequestBody TaskDTO taskDto ) {
        Task task = new Task(taskDto);
        return ResponseEntity.status(HttpStatus.OK).body(taskService.create(task));
    }

    @GetMapping( "/{id}" )
    public ResponseEntity<Task> findById(@PathVariable String id ) {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.getAll());
    }

    @DeleteMapping( "/{id}" )
    public ResponseEntity<Boolean> deleteById(@PathVariable String id ) {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.deleteById(id));
    }

    @PutMapping( "/{id}" )
    public ResponseEntity<Task> update( @RequestBody TaskDTO task, @PathVariable String id ) {
        return ResponseEntity.status(HttpStatus.OK).body(taskService.update(new Task(task,id),id));
    }

}

