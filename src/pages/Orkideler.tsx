import CategoryTemplate from "@/components/category/CategoryTemplate";
import orkideImage from "@/assets/orkide.jpg";

const products = [
  { name: "Mavi Orkide", price: "₺890", desc: "Nadir mavi phalaenopsis orkide, mat beyaz seramik saksıda" },
  { name: "Beyaz Çift Dallı", price: "₺780", desc: "Çift dallı beyaz orkide, şık gümüş detaylı saksıda" },
  { name: "Mor İmparator", price: "₺720", desc: "Tek dallı mor vanda orkide, cam vazo içinde" },
  { name: "Pembe Prenses", price: "₺650", desc: "Pembe phalaenopsis, yosun ve dekoratif taşlarla süslenmiş" },
  { name: "Mini Orkide Üçlüsü", price: "₺950", desc: "3 farklı renk mini orkide, ahşap tepsi üzerinde set" },
  { name: "Sarı Güneş", price: "₺680", desc: "Sarı oncidium orkide, hasır detaylı toprak saksıda" },
  { name: "Orkide & Sukulent Seti", price: "₺1100", desc: "Beyaz orkide ve sukulent aranjmanı, beton saksıda" },
  { name: "Dev Beyaz Orkide", price: "₺1350", desc: "Üç dallı jumbo beyaz orkide, lüks siyah saksıda" },
  { name: "Cattleya Orkide", price: "₺1500", desc: "Nadir cattleya türü orkide, koleksiyoncular için özel seri" },
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
