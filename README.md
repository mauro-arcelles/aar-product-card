# AAR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Adrian Arcelles

## Ejemplo

```
import {ProductButtons, ProductImage, ProductTitle, ProductCard} from 'arr-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 6,
    // maxCount: 10
  }}
>
  {
    ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }

</ProductCard>
```
