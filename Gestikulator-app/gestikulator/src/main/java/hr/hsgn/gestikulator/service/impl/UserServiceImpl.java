package hr.hsgn.gestikulator.service.impl;

import hr.hsgn.gestikulator.controller.request.UserRegisterRequest;
import hr.hsgn.gestikulator.entity.User;
import hr.hsgn.gestikulator.repository.UserRepository;
import hr.hsgn.gestikulator.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final ModelMapper mapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @Override
    public User register(UserRegisterRequest userRegisterRequest) {
        User user = mapper.map(userRegisterRequest, User.class);

        return userRepository.save(user);
    }

    @Override
    public User findById(Long id) {
        Optional<User> user = userRepository.findById(id);

        return user.orElse(null);
    }
}
