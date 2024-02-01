import { fetchProduct } from "@/app/requests";
import ProductDetail from "@/app/components/ProductDetail";
interface ProductDetailsPageProps {
  params: { id: string };
}

const ProductDetailPage = async (props: ProductDetailsPageProps) => {
  const {
    params: { id },
  } = props;
  const product = await fetchProduct(id);

  return (
    <ProductDetail product={product} />
  );
};

export default ProductDetailPage;
