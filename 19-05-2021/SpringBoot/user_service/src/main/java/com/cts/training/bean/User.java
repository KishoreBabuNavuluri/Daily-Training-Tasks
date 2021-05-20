package com.cts.training.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Entity
//@Table(name="user_details")
public class User {

	@Id
	@Column(name = "userId")
	private Long id;
	@NotEmpty(message="The User name not null")
	@Size(min=5, max=30,  message="it should be in range")
	private String username;
	@NotBlank(message="the password should not be blank")
	private String password;
	private String address;
	private Long phone;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public static boolean isPresent() {
		// TODO Auto-generated method stub
		return false;
	}

}
