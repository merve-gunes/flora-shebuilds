import { useLocation } from "react-router-dom";
import CategoryTemplate from "@/components/category/CategoryTemplate";
import { getProductsByCategory, categoryHeroImages, categoryNames } from "@/data/products";

const GenericCategory = () => {
  const { pathname } = useLocation();
  const products = getProductsByCategory(pathname);
  const heroImage = categoryHeroImages[pathname] || "";
  const title = categoryNames[pathname] || "Kategori";

  return (
    <CategoryTemplate
      title={title}
      subtitle={`En taze ve özel ${title.toLowerCase()} koleksiyonumuz`}
      heroImage={heroImage}
      products={products}
      categorySlug={pathname}
    />
  );
};

export default GenericCategory;
