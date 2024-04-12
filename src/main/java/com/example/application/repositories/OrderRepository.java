package com.example.application.repositories;

import com.example.application.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order>  {
    List<Order> findAllByCustomerId(Long customerId);
}
