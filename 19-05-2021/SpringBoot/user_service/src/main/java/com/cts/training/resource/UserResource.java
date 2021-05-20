package com.cts.training.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.cts.training.bean.User;
import com.cts.training.exception.UserNotFoundException;
import com.cts.training.repository.UserRespository;

@RestController
@RequestMapping("/api")
public class UserResource {
	
	@Autowired
	private UserRespository userRepository;
	//http://localhost:8082/api/users
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/users/{id}")
	public Optional<User> getUserById(@PathVariable Long id) {
		  Optional<User> user = userRepository.findById(id);
	        if(!user.isPresent())
	        {
	            throw new UserNotFoundException("The user with id - "+id+ " does not exists");
	        }
	            return user; 
	                
	    }
		//return userRepository.findById(id);
	
	
	@GetMapping("/users/address/{address}")
	public ResponseEntity<Optional<User>> getUserByAddress(@PathVariable String address) {
		Optional<User> user=userRepository.findByAddress(address);
		return new ResponseEntity<>(user, HttpStatus.FOUND);
	}

	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	 @PostMapping("/users")
	    public User createUser(@Valid @RequestBody User user, UriComponentsBuilder builder) {
	       User savedUser = userRepository.save(user);
	       return  savedUser;
	   }
	@CrossOrigin(origins="http://localhost:4200")
	 @PutMapping("/users/{id}")
	 public ResponseEntity<Object> updateUser(@Valid @RequestBody User user, @PathVariable Long id){
		 userRepository.save(user);
		 return ResponseEntity.noContent().build();
	 }
	 
}
