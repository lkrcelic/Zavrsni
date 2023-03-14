package hr.hsgn.gestikulator.service;

import java.util.List;
import java.util.Optional;

import hr.hsgn.gestikulator.dto.UserRegisterRequest;
import hr.hsgn.gestikulator.entity.User;

public interface UserService {

    List<User> getUsers();

    User register(UserRegisterRequest userRegisterRequest);

    User findById(Long id);
}
