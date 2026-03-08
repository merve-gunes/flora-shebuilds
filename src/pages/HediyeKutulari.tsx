import CategoryTemplate from "@/components/category/CategoryTemplate";
import hediyeKutusu from "@/assets/hediye-kutusu.jpg";
import { getProductsByCategory } from "@/data/products";

const products = getProductsByCategory("/hediye-kutulari");

const HediyeKutulari = () => (
  <CategoryTemplate
    title="Hediye Kutuları"
    subtitle="Çiçek ve lezzetlerin bir arada olduğu özel hediye setleri"
    heroImage={hediyeKutusu}
    products={products}
    categorySlug="/hediye-kutulari"
  />
);

export default HediyeKutulari;
