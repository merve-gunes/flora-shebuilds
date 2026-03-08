import CategoryTemplate from "@/components/category/CategoryTemplate";
import gulBuketleri from "@/assets/gul-buketleri.jpg";
import { getProductsByCategory } from "@/data/products";

const products = getProductsByCategory("/gul-buketleri");

const GulBuketleri = () => (
  <CategoryTemplate
    title="Gül Buketleri"
    subtitle="Aşkın ve tutkunun simgesi, özenle hazırlanmış gül buketlerimiz"
    heroImage={gulBuketleri}
    products={products}
    categorySlug="/gul-buketleri"
  />
);

export default GulBuketleri;
