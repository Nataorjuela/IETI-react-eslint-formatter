package com.example.demo.service;

import com.example.demo.entities.Task;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class TaskServiceHashMap implements TaskService {

    HashMap<String, Task> tasks=new HashMap();

    @Override
    public Task create(Task task) {
        String id= task.getId();
        tasks.put(id,task);
        return task;
    }

    @Override
    public Task findById( String id ){
        return tasks.get(id);
    }

    @Override
    public List<Task> getAll(){

        return new ArrayList<Task>(tasks.values());
    }

    @Override
    public boolean deleteById( String id ){
        tasks.remove(id);
        return true;
    }

    @Override
    public Task update( Task task, String taskId ){
        return tasks.put(taskId,task);
    }
}

