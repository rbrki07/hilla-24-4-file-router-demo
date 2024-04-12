import { AutoGrid } from '@vaadin/hilla-react-crud';
import { Button, HorizontalLayout, VerticalLayout } from '@vaadin/react-components';
import CustomerModel from 'Frontend/generated/com/example/application/entities/CustomerModel';
import { CustomerService } from 'Frontend/generated/endpoints';
import { useNavigate } from 'react-router-dom';

export default function Customers() {
  const navigate = useNavigate();

  return (
    <VerticalLayout className='h-full'>
      <AutoGrid
        model={CustomerModel}
        service={CustomerService}
        onActiveItemChanged={({ detail }) => {
          if (detail.value?.id) {
            navigate(`${detail.value.id}`);
          }
        }}
      />
      <HorizontalLayout className='self-end' theme='margin'>
        <Button theme='primary' onClick={() => navigate('new')}>
          New Customer
        </Button>
      </HorizontalLayout>
    </VerticalLayout>
  );
}
