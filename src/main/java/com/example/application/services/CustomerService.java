package com.example.application.services;

import com.example.application.entities.Customer;
import com.example.application.repositories.CustomerRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class CustomerService extends CrudRepositoryService<Customer, Long, CustomerRepository> {

    public List<Customer> getCustomers() {
        return super.getRepository().findAll();
    }
}
