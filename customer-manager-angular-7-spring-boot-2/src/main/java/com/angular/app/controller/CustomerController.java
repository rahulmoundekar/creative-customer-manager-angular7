package com.angular.app.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.Deflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angular.app.entity.Customer;
import com.angular.app.exceptions.ResourceNotFoundException;
import com.angular.app.repo.CustomerRepository;

@CrossOrigin("http://localhost:4200")
@RestController
public class CustomerController {

	@Autowired
	CustomerRepository customerRepository;

	@GetMapping("/customers")
	public List<Customer> getCustomersList() {
		return customerRepository.findAll();
	}

	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getCustomerById(Model model, @PathVariable(value = "id", required = true) Long id)
			throws ResourceNotFoundException {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found for this id :: " + id));
		return ResponseEntity.ok().body(customer);
	}

	@PostMapping("/customers")
	public Customer save(@Validated @RequestBody Customer customer) {
		return customerRepository.save(customer);
	}

	@PutMapping("/employees/{id}")
	public ResponseEntity<Customer> updateEmployee(@PathVariable(value = "id") Long id,
			@Validated @RequestBody Customer customerDetails) throws ResourceNotFoundException {

		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found for this id :: " + id));
		customer.setId(id);
		customer.setName(customerDetails.getName());
		customer.setAddress(customerDetails.getAddress());
		customer.setMobile(customerDetails.getMobile());
		customer.setEmail(customerDetails.getEmail());

		final Customer updatedEmployee = customerRepository.save(customer);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping(value = "/customers/{id}")
	public Map<String, Boolean> deleteCustomers(@PathVariable("id") Long id) {
		customerRepository.deleteById(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
