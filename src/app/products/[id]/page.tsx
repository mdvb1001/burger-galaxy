import { fetchProduct } from "@/app/requests";
import ProductDetail from "@/app/components/ProductDetail";
interface ProductDetailsPageProps {
  params: { id: string };
}

const ProductDetailPage = async (props: ProductDetailsPageProps) => {
  const {
    params: { id },
  } = props;
  const prod = await fetchProduct(id);

  return (
    <ProductDetail product={prod} />
  );
};

export default ProductDetailPage;
