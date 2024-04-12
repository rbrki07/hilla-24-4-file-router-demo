package com.example.application.services;

import com.example.application.entities.Product;
import com.example.application.repositories.ProductRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class ProductService extends CrudRepositoryService<Product, Long, ProductRepository> {
}
