import { fetchProduct, fetchAllProducts } from "@/app/requests";
import ProductDetail from "@/app/components/ProductDetail";
import { Product } from "@/app/types";
interface ProductDetailsPageProps {
  params: { id: string };
}

const ProductDetailPage = async (props: ProductDetailsPageProps) => {
  const {
    params: { id },
  } = props;
  const product = await fetchProduct(id);

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;

// Reduces page load time from ~250ms to under ~20ms
export async function generateStaticParams() {
  const products = await fetchAllProducts();
  return products.map((product: Product) => ({ id: product.id }));
}
