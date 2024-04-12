import { AutoForm } from '@vaadin/hilla-react-crud';
import Product from 'Frontend/generated/com/example/application/entities/Product';
import ProductModel from 'Frontend/generated/com/example/application/entities/ProductModel';
import { ProductService } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (productId && productId != 'new') {
      ProductService.get(Number.parseInt(productId)).then(setProduct);
    }
  }, [productId]);

  return (
    <AutoForm
      model={ProductModel}
      service={ProductService}
      item={product}
      onSubmitSuccess={() => {
        navigate('/products');
      }}
    />
  );
}
