package com.example.application.services;

import com.example.application.entities.Order;
import com.example.application.repositories.OrderRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class OrderService extends CrudRepositoryService<Order, Long, OrderRepository> {

    public List<Order> getOrdersByCustomer(Long customerId) {
        return super.getRepository().findAllByCustomerId(customerId);
    }
}
