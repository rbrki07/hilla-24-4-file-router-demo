package com.example.application.services;

import com.example.application.entities.OrderItem;
import com.example.application.repositories.OrderItemRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class OrderItemService extends CrudRepositoryService<OrderItem, Long, OrderItemRepository> {

    public List<OrderItem> getOrderItemsByOrder(Long orderId) {
        return super.getRepository().findAllByOrderId(orderId);
    }
}
