import { HorizontalLayout, VerticalLayout } from '@vaadin/react-components';
import OrderItem from 'Frontend/generated/com/example/application/entities/OrderItem';
import { OrderItemService } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderItemView() {
  const { orderItemId } = useParams();
  const [orderItem, setOrderItem] = useState<OrderItem>();

  useEffect(() => {
    if (orderItemId) {
      OrderItemService.get(Number.parseInt(orderItemId)).then(setOrderItem);
    }
  }, [orderItemId]);

  return (
    <>
      <HorizontalLayout className='w-full'>
        <VerticalLayout className='m-m'>
          <h3>Amount</h3>
          <ul>
            <li>{orderItem?.amount}</li>
          </ul>
        </VerticalLayout>
      </HorizontalLayout>
      <HorizontalLayout className='w-full'>
        <VerticalLayout className='m-m'>
          <h3>Order</h3>
          <ul>
            <li>Number: {orderItem?.order?.number}</li>
            <li>Created: {orderItem?.order?.created}</li>
            <li>Customer: {orderItem?.order?.customer?.name}</li>
          </ul>
        </VerticalLayout>
        <VerticalLayout className='m-m'>
          <h3>Product</h3>
          <ul>
            <li>SKU: {orderItem?.product?.sku}</li>
            <li>Name: {orderItem?.product?.name}</li>
            <li>Price: {orderItem?.product?.price} €</li>
          </ul>
        </VerticalLayout>
      </HorizontalLayout>
    </>
  );
}
