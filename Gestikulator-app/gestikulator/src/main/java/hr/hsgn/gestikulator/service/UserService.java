package hr.hsgn.gestikulator.service;

import java.util.List;

import hr.hsgn.gestikulator.controller.request.UserRegisterRequest;
import hr.hsgn.gestikulator.entity.User;

public interface UserService {

    List<User> getUsers();

    User register(UserRegisterRequest userRegisterRequest);

    User findById(Long id);
}
