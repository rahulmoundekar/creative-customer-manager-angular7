package com.angular.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angular.app.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
