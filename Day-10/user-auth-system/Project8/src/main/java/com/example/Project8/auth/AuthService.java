package com.example.Project8.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Project8.user.User;
import com.example.Project8.user.UserRepositary;

@Service
public class AuthService {

    private final UserRepositary userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepositary userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String register(String username, String password) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("user already exist");
        }

        String hashedPassword = passwordEncoder.encode(password);

        User user = new User(username, hashedPassword);
        userRepository.save(user);

        return "User Registered Successfully";

    }

    public String login(String username, String password) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new RuntimeException("user not found"));

        boolean isMatch = passwordEncoder.matches(password, user.getPassword());

        if (!isMatch) {
            throw new RuntimeException("Invalid crdential");
        }

        return jwtUtil.generateToken(username);
    }

}
