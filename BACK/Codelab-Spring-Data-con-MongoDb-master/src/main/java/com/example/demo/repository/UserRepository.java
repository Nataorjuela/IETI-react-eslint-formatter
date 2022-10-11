package com.example.demo.repository;
import com.example.demo.dto.UserDTO;
import com.example.demo.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, String>
{

}