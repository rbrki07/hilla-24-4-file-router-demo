import { AutoForm } from '@vaadin/hilla-react-crud';
import { Grid, GridColumn, VerticalLayout } from '@vaadin/react-components';
import Customer from 'Frontend/generated/com/example/application/entities/Customer';
import CustomerModel from 'Frontend/generated/com/example/application/entities/CustomerModel';
import Order from 'Frontend/generated/com/example/application/entities/Order';
import { CustomerService, OrderService } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CustomerView() {
  const { customerId } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer>();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (customerId && customerId != 'new') {
      CustomerService.get(Number.parseInt(customerId)).then(setCustomer);
      OrderService.getOrdersByCustomer(Number.parseInt(customerId)).then(setOrders);
    }
  }, [customerId]);

  return (
    <VerticalLayout className='h-full'>
      <AutoForm
        model={CustomerModel}
        service={CustomerService}
        item={customer}
        onSubmitSuccess={() => {
          navigate('/customers');
        }}
        className='w-full'
      />
      <h3>Orders</h3>
      <Grid
        items={orders}
        onActiveItemChanged={({ detail }) => {
          if (detail.value?.id) {
            navigate(`/orders/${detail.value.id}`);
          }
        }}
      >
        <GridColumn path='number' />
        <GridColumn path='created' />
      </Grid>
    </VerticalLayout>
  );
}
