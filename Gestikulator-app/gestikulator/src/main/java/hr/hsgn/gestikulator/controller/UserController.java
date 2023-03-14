package hr.hsgn.gestikulator.controller;

import hr.hsgn.gestikulator.dto.UserRegisterRequest;
import hr.hsgn.gestikulator.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import hr.hsgn.gestikulator.service.impl.UserServiceImpl;

import java.util.List;

@RestController
@RequestMapping(path = "users")
public class UserController {

    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> users(){
        return userService.getUsers();
    }

    @GetMapping("{id}")
    public User getUser(@PathVariable Long id){
        return userService.findById(id);
    }

    @PostMapping("register")
    public User register(@RequestBody UserRegisterRequest registerRequest) {
        return userService.register(registerRequest);
    }
}
