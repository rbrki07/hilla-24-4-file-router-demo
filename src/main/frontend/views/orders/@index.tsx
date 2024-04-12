import { AutoGrid } from '@vaadin/hilla-react-crud';
import { Button, HorizontalLayout, TextField, VerticalLayout } from '@vaadin/react-components';
import Order from 'Frontend/generated/com/example/application/entities/Order';
import OrderModel from 'Frontend/generated/com/example/application/entities/OrderModel';
import Matcher from 'Frontend/generated/com/vaadin/hilla/crud/filter/PropertyStringFilter/Matcher';
import { OrderService } from 'Frontend/generated/endpoints';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const navigate = useNavigate();

  return (
    <VerticalLayout className='h-full'>
      <AutoGrid
        model={OrderModel}
        service={OrderService}
        onActiveItemChanged={({ detail }) => {
          if (detail.value?.id) {
            navigate(`${detail.value.id}`);
          }
        }}
        columnOptions={{
          customer: {
            renderer: ({ item }: { item: Order }) => <span>{item.customer?.name}</span>,
            headerFilterRenderer: ({ setFilter }) => (
              <TextField
                placeholder='Filter...'
                onValueChanged={({ detail }) =>
                  setFilter({
                    propertyId: 'customer.name',
                    filterValue: detail.value,
                    matcher: Matcher.CONTAINS,
                    '@type': 'propertyString',
                  })
                }
              />
            ),
          },
        }}
      />
      <HorizontalLayout className='self-end' theme='margin'>
        <Button theme='primary' onClick={() => navigate('new')}>
          New Order
        </Button>
      </HorizontalLayout>
    </VerticalLayout>
  );
}
