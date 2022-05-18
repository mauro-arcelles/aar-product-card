import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from '../components/ProductButtons';
export { ProductImage } from '../components/ProductImage';
export { ProductTitle } from '../components/ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

