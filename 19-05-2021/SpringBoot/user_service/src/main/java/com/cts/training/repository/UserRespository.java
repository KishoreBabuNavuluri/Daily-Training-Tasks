package com.cts.training.repository;

import com.cts.training.bean.*;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRespository extends JpaRepository<User,Long> {

	

	Optional<User> findByAddress(String address);

}
