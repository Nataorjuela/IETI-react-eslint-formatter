package com.example.demo.service;

import com.example.demo.entities.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


public class UserServiceHashMap implements UserService {
    HashMap<String, User> users=new HashMap();

    @Override
    public User createUser(User user){
        String id= user.getId();
        users.put(id,user);
        return user;
    }

    @Override
    public User findById( String id ){
        return users.get(id);
    }

    @Override
    public List<User> getAll(){
        return new ArrayList<User>(users.values());
    }

    @Override
    public boolean deleteById( String id ){
        users.remove(id);
        return true;
    }

    @Override
    public User update( User user, String userId ){
        return users.put(userId,user);
    }
}