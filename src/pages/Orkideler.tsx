import CategoryTemplate from "@/components/category/CategoryTemplate";
import orkideImage from "@/assets/orkide.jpg";
import { getProductsByCategory } from "@/data/products";

const products = getProductsByCategory("/orkideler");

const Orkideler = () => (
  <CategoryTemplate
    title="Orkideler"
    subtitle="Zarafet ve şıklığın sembolü, uzun ömürlü orkide çeşitlerimiz"
    heroImage={orkideImage}
    products={products}
    categorySlug="/orkideler"
  />
);

export default Orkideler;
