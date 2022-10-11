package com.example.demo.service;

import com.example.demo.entities.User;

import java.util.List;

public interface UserService
{

    User createUser(User user);

    User findById( String id );

    List<User> getAll();

    boolean deleteById( String id );

    User update( User user, String userId );
}