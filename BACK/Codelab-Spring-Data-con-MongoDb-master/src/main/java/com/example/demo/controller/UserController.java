package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.entities.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getAll());
    }

    @GetMapping( "/{id}" )
    public ResponseEntity<User> findById(@PathVariable String id ) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.findById(id));
    }


    @PostMapping
    public ResponseEntity<User> create(@RequestBody UserDTO userDto ) {
        User usuario = new User(userDto);
        return ResponseEntity.status(HttpStatus.OK).body(userService.createUser(usuario));
    }

    @PutMapping( "/{id}" )
    public ResponseEntity<User> update( @RequestBody UserDTO user, @PathVariable String id ) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.update(new User(user),id));
    }

    @DeleteMapping( "/{id}" )
    public ResponseEntity<Boolean> delete(@PathVariable String id ) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.deleteById(id));
    }
}

