import CategoryTemplate from "@/components/category/CategoryTemplate";
import orkideImage from "@/assets/orkide.jpg";

const products = [
  { name: "Mor Orkide", price: "₺650", desc: "Tek dallı mor phalaenopsis orkide, seramik saksıda" },
  { name: "Beyaz Elegance", price: "₺750", desc: "Çift dallı beyaz orkide, premium saksıda" },
  { name: "Phalaenopsis", price: "₺580", desc: "Pembe phalaenopsis orkide, dekoratif saksıda" },
  { name: "Mini Orkide Seti", price: "₺450", desc: "3 adet mini orkide, şık kutuda" },
  { name: "Orkide Aranjmanı", price: "₺900", desc: "Çoklu orkide aranjmanı, özel tasarım saksıda" },
  { name: "Sarı Orkide", price: "₺680", desc: "Nadir sarı orkide, cam saksıda" },
];

const Orkideler = () => (
  <CategoryTemplate
    title="Orkideler"
    subtitle="Zarafet ve şıklığın sembolü, uzun ömürlü orkide çeşitlerimiz"
    heroImage={orkideImage}
    products={products}
  />
);

export default Orkideler;
