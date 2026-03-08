import CategoryTemplate from "@/components/category/CategoryTemplate";
import dugunCicekleri from "@/assets/dugun-cicekleri.jpg";
import { getProductsByCategory } from "@/data/products";

const products = getProductsByCategory("/dugun-cicekleri");

const DugunCicekleri = () => (
  <CategoryTemplate
    title="Düğün Çiçekleri"
    subtitle="Hayatınızın en özel gününe yakışır düğün aranjmanları"
    heroImage={dugunCicekleri}
    products={products}
    categorySlug="/dugun-cicekleri"
  />
);

export default DugunCicekleri;
