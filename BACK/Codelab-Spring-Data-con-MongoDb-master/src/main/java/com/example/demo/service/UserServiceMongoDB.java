package com.example.demo.service;
import com.example.demo.dto.UserDTO;
import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceMongoDB implements UserService
{

    private final UserRepository userRepository;

    public UserServiceMongoDB(@Autowired UserRepository userRepository )
    {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser( User user )
    {
        return userRepository.save(user);
    }

    @Override
    public User findById( String id )
    {
        return userRepository.findById(id).get();
    }

    @Override
    public List<User> getAll()
    {
        return userRepository.findAll();
    }

    @Override
    public boolean deleteById( String id )
    {
        if(userRepository.findById(id)!=null) {
            userRepository.deleteById(id);
            return true;
        }else { return false;}

    }

    @Override
    public User update(User user, String id )
    {
        if(userRepository.findById(id)!=null)
        {
            return userRepository.save(user);
        }else {
            return null;
        }
    }
}