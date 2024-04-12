import { AutoGrid } from '@vaadin/hilla-react-crud';
import { Button, HorizontalLayout, VerticalLayout } from '@vaadin/react-components';
import ProductModel from 'Frontend/generated/com/example/application/entities/ProductModel';
import { ProductService } from 'Frontend/generated/endpoints';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  return (
    <VerticalLayout className='h-full'>
      <AutoGrid
        model={ProductModel}
        service={ProductService}
        onActiveItemChanged={({ detail }) => {
          if (detail.value?.id) {
            navigate(`${detail.value.id}`);
          }
        }}
      />
      <HorizontalLayout className='self-end' theme='margin'>
        <Button theme='primary' onClick={() => navigate('new')}>
          New Product
        </Button>
      </HorizontalLayout>
    </VerticalLayout>
  );
}
