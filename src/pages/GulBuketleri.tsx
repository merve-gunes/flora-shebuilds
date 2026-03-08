import CategoryTemplate from "@/components/category/CategoryTemplate";
import gulBuketleri from "@/assets/gul-buketleri.jpg";

const products = [
  { name: "Romantik Gül Buketi", price: "₺450", desc: "21 adet kırmızı ve pembe gülden oluşan el yapımı buket" },
  { name: "Kırmızı Aşk", price: "₺550", desc: "50 adet ithal kırmızı gül, özel ambalajda" },
  { name: "Pembe Rüya", price: "₺400", desc: "Pastel pembe güller ve okaliptüs yapraklarıyla zarif bir buket" },
  { name: "Gül Bahçesi", price: "₺650", desc: "Karma renklerde 30 adet bahçe gülü aranjmanı" },
  { name: "Tek Dal Gül", price: "₺120", desc: "Özel kutuda tek dal ithal gül, kişiye özel not ile" },
  { name: "Gül & Çikolata", price: "₺500", desc: "12 gül ve el yapımı çikolata seti" },
];

const GulBuketleri = () => (
  <CategoryTemplate
    title="Gül Buketleri"
    subtitle="Aşkın ve tutkunun simgesi, özenle hazırlanmış gül buketlerimiz"
    heroImage={gulBuketleri}
    products={products}
  />
);

export default GulBuketleri;
