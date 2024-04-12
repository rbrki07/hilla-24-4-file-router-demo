import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { AutoForm } from '@vaadin/hilla-react-crud';
import { ComboBox, Grid, GridColumn, VerticalLayout } from '@vaadin/react-components';
import Customer from 'Frontend/generated/com/example/application/entities/Customer';
import Order from 'Frontend/generated/com/example/application/entities/Order';
import OrderItem from 'Frontend/generated/com/example/application/entities/OrderItem';
import OrderModel from 'Frontend/generated/com/example/application/entities/OrderModel';
import { CustomerService, OrderItemService, OrderService } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const config: ViewConfig = {
  menu: {
    exclude: true,
  },
};

export default function OrderView() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order>();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [orderValue, setOrderValue] = useState<Number>(0);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    if (orderId && orderId != 'new') {
      OrderService.get(Number.parseInt(orderId)).then(setOrder);
      OrderItemService.getOrderItemsByOrder(Number.parseInt(orderId)).then(setOrderItems);
    }
  }, [orderId]);

  useEffect(() => {
    setOrderValue(
      Math.round(
        orderItems.map((orderItem) => calculateValue(orderItem)).reduce((sum, value) => sum + value, 0) * 100,
      ) / 100,
    );
  }, [orderItems]);

  useEffect(() => {
    CustomerService.getCustomers().then(setCustomers);
  }, []);

  const calculateValue = (orderItem: OrderItem) => {
    if (orderItem.amount && orderItem.product?.price) {
      return orderItem.amount * orderItem.product.price;
    }
    return 0;
  };

  return (
    <VerticalLayout className='h-full'>
      <AutoForm
        model={OrderModel}
        service={OrderService}
        item={order}
        onSubmitSuccess={() => {
          navigate('/orders');
        }}
        fieldOptions={{
          customer: {
            renderer: ({ field }) => <ComboBox {...field} items={customers} itemLabelPath='name' />,
          },
        }}
        className='w-full'
      />
      <h3>Items</h3>
      <Grid
        items={orderItems}
        onActiveItemChanged={({ detail }) => {
          if (detail.value?.id) {
            navigate(`items/${detail.value.id}`);
          }
        }}
      >
        <GridColumn path='product.sku' />
        <GridColumn path='product.name' />
        <GridColumn path='product.price' />
        <GridColumn path='amount' />
        <GridColumn header='Value' footer={`Total value: ${orderValue} €`}>
          {({ item }: { item: OrderItem }) => <span>{calculateValue(item)} €</span>}
        </GridColumn>
      </Grid>
    </VerticalLayout>
  );
}
