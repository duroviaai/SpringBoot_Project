package com.example.Project8.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositary extends JpaRepository<User,Long>  {

    Optional<User> findByUsername(String username);

}
