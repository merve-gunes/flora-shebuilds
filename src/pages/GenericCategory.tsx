import { useParams } from "react-router-dom";
import CategoryTemplate from "@/components/category/CategoryTemplate";
import { getProductsByCategory, categoryHeroImages, categoryNames } from "@/data/products";

const GenericCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const categorySlug = `/${slug}`;
  const products = getProductsByCategory(categorySlug);
  const heroImage = categoryHeroImages[categorySlug] || "";
  const title = categoryNames[categorySlug] || "Kategori";

  return (
    <CategoryTemplate
      title={title}
      subtitle={`En taze ve özel ${title.toLowerCase()} koleksiyonumuz`}
      heroImage={heroImage}
      products={products}
      categorySlug={categorySlug}
    />
  );
};

export default GenericCategory;
